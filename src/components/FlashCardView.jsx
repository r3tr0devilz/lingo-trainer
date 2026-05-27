import { useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight, RotateCcw, Bookmark, BookmarkCheck, Sun, Moon, GraduationCap, Settings } from 'lucide-react'
import sentences from '../data/sentences.js'

const CATEGORIES = [
  'All Sentences',
  'Greetings & Small Talk',
  'Work & Professional',
  'Friends & Casual',
  'Travel & Directions',
  'Shopping',
  'Restaurants & Food',
  'Health & Medical',
  'Emergency',
  'Family',
  'Dating & Romance',
]

function loadReversed() {
  try {
    const raw = localStorage.getItem('lingo-flash-reversed')
    return raw ? JSON.parse(raw) : false
  } catch { return false }
}

export default function FlashCardView({ bookmarks, onBookmark, darkMode, onToggleDark }) {
  const [category, setCategory] = useState('All Sentences')
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [showCatPicker, setShowCatPicker] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [reversed, setReversed] = useState(loadReversed)

  const deck = category === 'All Sentences'
    ? sentences
    : sentences.filter(s => s.category === category)

  const sentence = deck[Math.min(index, deck.length - 1)]
  const total = deck.length
  const isBookmarked = sentence ? bookmarks.has(sentence.id) : false

  const goNext = useCallback(() => {
    if (index < total - 1) { setIndex(i => i + 1); setRevealed(false) }
  }, [index, total])

  const goPrev = useCallback(() => {
    if (index > 0) { setIndex(i => i - 1); setRevealed(false) }
  }, [index])

  const handleCategoryChange = useCallback((cat) => {
    setCategory(cat)
    setIndex(0)
    setRevealed(false)
    setShowCatPicker(false)
  }, [])

  const toggleReversed = useCallback(() => {
    setReversed(r => {
      const next = !r
      localStorage.setItem('lingo-flash-reversed', JSON.stringify(next))
      return next
    })
    setRevealed(false)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); goNext() }
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   { e.preventDefault(); goPrev() }
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); setRevealed(r => !r) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev])

  if (!sentence) return null

  const progress = total > 1 ? (index / (total - 1)) * 100 : 100

  return (
    <div className="flash-view">
      <div className="flash-header">
        <button
          className="flash-cat-btn"
          onClick={() => { setShowCatPicker(p => !p); setShowSettings(false) }}
        >
          <GraduationCap size={16} strokeWidth={1.75} />
          <span>{category}</span>
          <span className="flash-cat-caret">▾</span>
        </button>
        <div className="flash-header-right">
          <span className="flash-counter">{index + 1} / {total}</span>
          <button
            className={`flash-settings-btn${showSettings ? ' flash-settings-btn--active' : ''}`}
            onClick={() => { setShowSettings(p => !p); setShowCatPicker(false) }}
            aria-label="Settings"
          >
            <Settings size={18} strokeWidth={1.75} />
          </button>
          <button className="dark-toggle" onClick={onToggleDark} aria-label="Toggle dark mode">
            {darkMode ? <Sun size={18} strokeWidth={1.75} /> : <Moon size={18} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {showSettings && (
        <div className="flash-settings-panel">
          <div className="flash-settings-row">
            <span className="flash-settings-label">Show English first</span>
            <button
              className={`flash-toggle${reversed ? ' flash-toggle--on' : ''}`}
              onClick={toggleReversed}
              role="switch"
              aria-checked={reversed}
              aria-label="Reverse card direction"
            >
              <span className="flash-toggle-thumb" />
            </button>
          </div>
          <a
            className="flash-feedback-link"
            href="https://github.com/r3tr0devilz/lingo-trainer/issues/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send feedback ↗
          </a>
        </div>
      )}

      {showCatPicker && (
        <div className="flash-cat-dropdown">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`flash-cat-option${cat === category ? ' flash-cat-option--active' : ''}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="flash-progress-bar">
        <div className="flash-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="flash-stage">
        <div
          className={`flash-card${revealed ? ' flash-card--revealed' : ''}`}
          onClick={() => setRevealed(r => !r)}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && setRevealed(r => !r)}
          aria-label={revealed ? 'Hide translation' : 'Reveal translation'}
        >
          <div className="flash-card-front">
            <p className="flash-category-badge">{sentence.category}</p>
            <p className="flash-german">
              {reversed ? sentence.english : sentence.german}
            </p>
            {!revealed && <p className="flash-tap-hint">tap to reveal</p>}
          </div>

          {revealed && (
            <div className="flash-card-back">
              {reversed ? (
                <>
                  <p className="flash-german">{sentence.german}</p>
                  <p className="flash-pronunciation">{sentence.pronunciation}</p>
                </>
              ) : (
                <>
                  <p className="flash-english">{sentence.english}</p>
                  <p className="flash-pronunciation">{sentence.pronunciation}</p>
                </>
              )}
            </div>
          )}
        </div>

        <div className="flash-actions">
          <button
            className="flash-nav-btn"
            onClick={goPrev}
            disabled={index === 0}
            aria-label="Previous card"
          >
            <ChevronLeft size={22} strokeWidth={2} />
          </button>

          <button
            className="flash-flip-btn"
            onClick={() => setRevealed(r => !r)}
            aria-label={revealed ? 'Hide' : 'Reveal'}
          >
            <RotateCcw size={18} strokeWidth={2} />
            <span>{revealed ? 'Hide' : 'Reveal'}</span>
          </button>

          <button
            className={`flash-bookmark-btn${isBookmarked ? ' flash-bookmark-btn--active' : ''}`}
            onClick={() => onBookmark(sentence.id)}
            aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark'}
          >
            {isBookmarked
              ? <BookmarkCheck size={20} strokeWidth={1.75} />
              : <Bookmark size={20} strokeWidth={1.75} />
            }
          </button>

          <button
            className="flash-nav-btn"
            onClick={goNext}
            disabled={index === total - 1}
            aria-label="Next card"
          >
            <ChevronRight size={22} strokeWidth={2} />
          </button>
        </div>

        <p className="flash-kb-hint">space / enter to flip · ← → to navigate</p>
      </div>
    </div>
  )
}
