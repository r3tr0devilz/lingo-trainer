import { useState, useCallback, useEffect, useRef } from 'react'
import {
  ChevronLeft, ChevronRight, Sun, Moon,
  Volume2, PauseCircle, Bookmark, BookmarkCheck,
  ChevronUp, ChevronDown,
} from 'lucide-react'

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
}) {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const isBookmarked = bookmarks.has(sentence.id)
  const germanVoiceRef = useRef(null)

  // Pick the best available German voice. getVoices() is async on Chrome —
  // voices populate after the voiceschanged event fires.
  useEffect(() => {
    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices()
      germanVoiceRef.current =
        voices.find(v => v.lang === 'de-DE' && v.localService) ||
        voices.find(v => v.lang === 'de-DE') ||
        voices.find(v => v.lang.startsWith('de')) ||
        null
    }
    pickVoice()
    window.speechSynthesis.addEventListener('voiceschanged', pickVoice)
    return () => window.speechSynthesis.removeEventListener('voiceschanged', pickVoice)
  }, [])

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
          className="card-nav-btn"
          onClick={onPrev}
          disabled={!canGoPrev}
          aria-label="Previous sentence"
        >
          <ChevronLeft size={20} strokeWidth={2} />
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

      {/* Main content */}
      <div className="card-body">
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
