import { useState, useCallback, useEffect, useRef } from 'react'
import {
  ArrowLeft, Sun, Moon,
  Volume2, PauseCircle, Bookmark, BookmarkCheck,
  ChevronUp, ChevronDown,
} from 'lucide-react'

function pickGermanVoice(voices) {
  return (
    voices.find(v => v.lang.replace('_','-') === 'de-DE' && v.localService) ||
    voices.find(v => v.lang.replace('_','-') === 'de-DE') ||
    voices.find(v => v.lang.replace('_','-').startsWith('de-')) ||
    voices.find(v => /deutsch/i.test(v.name) || /\bgerman\b/i.test(v.name)) ||
    null
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
    if (isSpeaking) {
      setIsSpeaking(false)
      return
    }
    const utterance = new SpeechSynthesisUtterance(sentence.german)
    utterance.lang = 'de-DE'
    utterance.rate = 0.85
    if (germanVoiceRef.current) utterance.voice = germanVoiceRef.current
    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)
    window.speechSynthesis.speak(utterance)
  }, [sentence.german, isSpeaking])

  const handleBookmark = useCallback(() => {
    onBookmark(sentence.id)
  }, [onBookmark, sentence.id])

  return (
    <div className="sentence-card">
      {/* Top bar */}
      <div className="card-top-bar">
        <button
          className="card-back-btn"
          onClick={onBack}
          aria-label="Back to browse"
        >
          <ArrowLeft size={20} strokeWidth={2} />
        </button>
        <span className="card-category-badge">
          {sentence.category}
        </span>
        <button
          className="card-dark-toggle"
          onClick={onToggleDark}
          aria-label="Toggle dark mode"
          title={darkMode ? 'Light mode' : 'Dark mode'}
        >
          {darkMode
            ? <Sun size={18} strokeWidth={1.75} />
            : <Moon size={18} strokeWidth={1.75} />
          }
        </button>
      </div>

      {/* Main content — double-tap to bookmark */}
      <div className="card-body" onClick={handleDoubleTap}>
        {bookmarkFlash && (
          <span className="bookmark-flash" aria-hidden="true">
            <BookmarkCheck size={64} strokeWidth={1.5} />
          </span>
        )}
        <p className="card-english">{sentence.english}</p>
        <p className="card-german">{sentence.german}</p>
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

        <div className="fab fab--progress" aria-hidden="true">
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ height: `${progress * 100}%` }}
            />
          </div>
          <span className="fab-label">{index + 1}/{total}</span>
        </div>
      </div>

      {/* Swipe nudge at bottom — show one at a time, prefer next */}
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
