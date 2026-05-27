import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import {
  ArrowLeft, Sun, Moon,
  Volume2, PauseCircle, Bookmark, BookmarkCheck,
  ChevronUp, ChevronDown, Highlighter,
} from 'lucide-react'
import { tagGerman } from '../utils/germanTagger.js'
import SettingsMenu from './SettingsMenu.jsx'

function pickGermanVoice(voices) {
  return (
    voices.find(v => v.lang.replace('_','-') === 'de-DE' && v.localService) ||
    voices.find(v => v.lang.replace('_','-') === 'de-DE') ||
    voices.find(v => v.lang.replace('_','-').startsWith('de-')) ||
    voices.find(v => /deutsch/i.test(v.name) || /\bgerman\b/i.test(v.name)) ||
    null
  )
}

function loadGrammarMode() {
  try { return JSON.parse(localStorage.getItem('lingo-grammar-mode') ?? 'false') }
  catch { return false }
}

function GermanHighlighted({ text }) {
  const tokens = useMemo(() => tagGerman(text), [text])
  return (
    <p className="card-german">
      {tokens.map((token, i) => (
        <span key={i} className={token.role ? `gtag gtag--${token.role}` : undefined}>
          {token.text}{token.space}
        </span>
      ))}
    </p>
  )
}

export default function SentenceCard({
  sentence,
  index,
  total,
  progress,
  bookmarks,
  onBookmark,
  darkMode,
  onToggleDark,
  onNext,
  onPrev,
  canGoNext,
  canGoPrev,
  onBack,
}) {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [bookmarkFlash, setBookmarkFlash] = useState(false)
  const [grammarMode, setGrammarMode] = useState(loadGrammarMode)
  const isBookmarked = bookmarks.has(sentence.id)
  const germanVoiceRef = useRef(null)
  const lastTapRef = useRef(0)

  useEffect(() => {
    const update = () => { germanVoiceRef.current = pickGermanVoice(window.speechSynthesis.getVoices()) }
    update()
    window.speechSynthesis.addEventListener('voiceschanged', update)
    return () => window.speechSynthesis.removeEventListener('voiceschanged', update)
  }, [])

  const handleDoubleTap = useCallback(() => {
    const now = Date.now()
    if (now - lastTapRef.current < 320) {
      onBookmark(sentence.id)
      setBookmarkFlash(true)
      setTimeout(() => setBookmarkFlash(false), 650)
    }
    lastTapRef.current = now
  }, [onBookmark, sentence.id])

  const speak = useCallback(() => {
    if (!window.speechSynthesis) return
    window.speechSynthesis.cancel()
    if (isSpeaking) { setIsSpeaking(false); return }
    const utterance = new SpeechSynthesisUtterance(sentence.german)
    utterance.lang = 'de-DE'
    utterance.rate = 0.85
    if (germanVoiceRef.current) utterance.voice = germanVoiceRef.current
    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)
    window.speechSynthesis.speak(utterance)
  }, [sentence.german, isSpeaking])

  const handleBookmark = useCallback(() => { onBookmark(sentence.id) }, [onBookmark, sentence.id])

  const toggleGrammar = useCallback(() => {
    setGrammarMode(m => {
      const next = !m
      localStorage.setItem('lingo-grammar-mode', JSON.stringify(next))
      return next
    })
  }, [])

  return (
    <div className="sentence-card">
      {/* Top bar */}
      <div className="card-top-bar">
        <button className="card-back-btn" onClick={onBack} aria-label="Back to browse">
          <ArrowLeft size={20} strokeWidth={2} />
        </button>
        <span className="card-category-badge">{sentence.category}</span>
        <div className="card-top-right">
          <SettingsMenu />
          <button
            className="card-dark-toggle"
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
            title={darkMode ? 'Light mode' : 'Dark mode'}
          >
            {darkMode ? <Sun size={18} strokeWidth={1.75} /> : <Moon size={18} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {/* Main content — double-tap to bookmark */}
      <div className="card-body" onClick={handleDoubleTap}>
        {bookmarkFlash && (
          <span className="bookmark-flash" aria-hidden="true">
            <BookmarkCheck size={64} strokeWidth={1.5} />
          </span>
        )}
        <p className="card-english">{sentence.english}</p>

        {grammarMode
          ? <GermanHighlighted text={sentence.german} />
          : <p className="card-german">{sentence.german}</p>
        }

        {grammarMode && (
          <div className="grammar-legend">
            <span className="grammar-legend-item gtag--subject">Subject</span>
            <span className="grammar-legend-item gtag--verb">Verb</span>
            <span className="grammar-legend-item gtag--object">Object</span>
          </div>
        )}

        <p className="card-pronunciation">{sentence.pronunciation}</p>
      </div>

      {/* Right FABs */}
      <div className="card-fabs">
        <button
          className={`fab fab--speaker${isSpeaking ? ' fab--active' : ''}`}
          onClick={speak}
          aria-label="Pronounce German sentence"
          title="Listen"
        >
          <span className="fab-icon">
            {isSpeaking
              ? <PauseCircle size={22} strokeWidth={1.75} />
              : <Volume2 size={22} strokeWidth={1.75} />
            }
          </span>
          <span className="fab-label">Listen</span>
        </button>

        <button
          className={`fab fab--bookmark${isBookmarked ? ' fab--active' : ''}`}
          onClick={handleBookmark}
          aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
          title={isBookmarked ? 'Bookmarked' : 'Bookmark'}
        >
          <span className="fab-icon">
            {isBookmarked
              ? <BookmarkCheck size={22} strokeWidth={1.75} />
              : <Bookmark size={22} strokeWidth={1.75} />
            }
          </span>
          <span className="fab-label">{isBookmarked ? 'Saved' : 'Save'}</span>
        </button>

        <button
          className={`fab fab--grammar${grammarMode ? ' fab--active' : ''}`}
          onClick={toggleGrammar}
          aria-label={grammarMode ? 'Hide grammar highlights' : 'Show grammar highlights'}
          title="Grammar"
        >
          <span className="fab-icon"><Highlighter size={22} strokeWidth={1.75} /></span>
          <span className="fab-label">Grammar</span>
        </button>

        <div className="fab fab--progress" aria-hidden="true">
          <div className="progress-track">
            <div className="progress-fill" style={{ height: `${progress * 100}%` }} />
          </div>
          <span className="fab-label">{index + 1}/{total}</span>
        </div>
      </div>

      {/* Swipe nudge at bottom */}
      <div className="card-swipe-nudge">
        {canGoNext ? (
          <span className="nudge-arrow" onClick={onNext} title="Next">
            <ChevronUp size={14} strokeWidth={2} /> swipe up
          </span>
        ) : canGoPrev ? (
          <span className="nudge-arrow" onClick={onPrev} title="Previous">
            <ChevronDown size={14} strokeWidth={2} /> swipe down
          </span>
        ) : (
          <span className="nudge-end">End of {sentence.category}</span>
        )}
      </div>
    </div>
  )
}
