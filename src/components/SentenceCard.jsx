import { useState, useCallback } from 'react'

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
          ←
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
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Main content */}
      <div className="card-body">
        <p className="card-english">{sentence.english}</p>
        <p className="card-german">{sentence.german}</p>
        <p className="card-pronunciation">{sentence.pronunciation}</p>
      </div>

      {/* Right FABs (Instagram-style) */}
      <div className="card-fabs">
        {/* Speaker */}
        <button
          className={`fab fab--speaker${isSpeaking ? ' fab--active' : ''}`}
          onClick={speak}
          aria-label="Pronounce German sentence"
          title="Listen"
        >
          <span className="fab-icon">{isSpeaking ? '⏸' : '🔊'}</span>
          <span className="fab-label">Listen</span>
        </button>

        {/* Bookmark */}
        <button
          className={`fab fab--bookmark${isBookmarked ? ' fab--active' : ''}`}
          onClick={handleBookmark}
          aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
          title={isBookmarked ? 'Bookmarked' : 'Bookmark'}
        >
          <span className="fab-icon">{isBookmarked ? '🔖' : '🏷️'}</span>
          <span className="fab-label">{isBookmarked ? 'Saved' : 'Save'}</span>
        </button>

        {/* Progress indicator */}
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

      {/* Swipe nudge at bottom */}
      <div className="card-swipe-nudge">
        {canGoPrev && (
          <span className="nudge-arrow nudge-arrow--up" onClick={onPrev} title="Previous">
            ↑ swipe up to continue
          </span>
        )}
        {canGoNext && (
          <span className="nudge-arrow nudge-arrow--down" onClick={onNext} title="Next">
            swipe up ↑
          </span>
        )}
        {!canGoNext && (
          <span className="nudge-end">End of {sentence.category}</span>
        )}
      </div>
    </div>
  )
}
