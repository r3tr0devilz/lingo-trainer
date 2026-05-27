import { useState, useCallback, useEffect, useRef } from 'react'
import {
  ChevronLeft, ChevronRight, RotateCcw, Sun, Moon,
  GraduationCap, Search, X, ChevronUp,
} from 'lucide-react'
import vocab, { VOCAB_CATEGORIES, VOCAB_TYPES } from '../data/vocab.js'

function loadReversed() {
  try {
    const raw = localStorage.getItem('lingo-flash-reversed')
    return raw ? JSON.parse(raw) : true
  } catch { return true }
}

function loadHintSeen() {
  try { return JSON.parse(localStorage.getItem('lingo-vocab-hint-seen') ?? 'false') }
  catch { return false }
}

// ── Grammar tables ─────────────────────────────────────────────────────────────

function VerbTable({ forms }) {
  if (!forms) return null
  const persons = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie']
  return (
    <div className="vocab-forms">
      <table className="vocab-table">
        <thead><tr><th>Person</th><th>Präsens</th></tr></thead>
        <tbody>
          {persons.map((p, i) => (
            <tr key={p}>
              <td className="vocab-table-person">{p}</td>
              <td className="vocab-table-form">{forms.present[i]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="vocab-past-row">
        <span className="vocab-past-label">Präteritum</span>
        <span className="vocab-past-val">{forms.praeteritum}</span>
        <span className="vocab-past-label">Perfekt</span>
        <span className="vocab-past-val">{forms.perfekt}</span>
      </div>
    </div>
  )
}

function NounTable({ forms }) {
  if (!forms) return null
  return (
    <div className="vocab-forms">
      <table className="vocab-table">
        <thead><tr><th>Kasus</th><th>Singular</th></tr></thead>
        <tbody>
          <tr><td className="vocab-table-person">Nominativ</td><td className="vocab-table-form">{forms.nom}</td></tr>
          <tr><td className="vocab-table-person">Akkusativ</td><td className="vocab-table-form">{forms.akk}</td></tr>
          <tr><td className="vocab-table-person">Dativ</td><td className="vocab-table-form">{forms.dat}</td></tr>
          <tr><td className="vocab-table-person">Genitiv</td><td className="vocab-table-form">{forms.gen}</td></tr>
        </tbody>
      </table>
      <div className="vocab-past-row">
        <span className="vocab-past-label">Plural</span>
        <span className="vocab-past-val">{forms.plural}</span>
      </div>
    </div>
  )
}

function AdjTable({ german, forms }) {
  if (!forms) return null
  return (
    <div className="vocab-forms">
      <div className="vocab-degrees">
        <div className="vocab-degree-col">
          <span className="vocab-degree-label">Positiv</span>
          <span className="vocab-degree-val">{german}</span>
        </div>
        <div className="vocab-degree-col">
          <span className="vocab-degree-label">Komparativ</span>
          <span className="vocab-degree-val">{forms.komparativ}</span>
        </div>
        <div className="vocab-degree-col">
          <span className="vocab-degree-label">Superlativ</span>
          <span className="vocab-degree-val">{forms.superlativ}</span>
        </div>
      </div>
    </div>
  )
}

function WordTypeBadge({ type }) {
  const labels = { verb: 'Verb', noun: 'Nomen', adjective: 'Adjektiv', adverb: 'Adverb' }
  return <span className={`vocab-type-badge vocab-type-badge--${type}`}>{labels[type] ?? type}</span>
}

// ── Main component ─────────────────────────────────────────────────────────────

export default function VocabView({ darkMode, onToggleDark }) {
  const [category, setCategory] = useState('All Words')
  const [typeFilter, setTypeFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [index, setIndex] = useState(0)
  // 'front' | 'translated' | 'expanded'
  const [cardState, setCardState] = useState('front')
  const [showCatPicker, setShowCatPicker] = useState(false)
  const [reversed] = useState(loadReversed)
  const [hintSeen, setHintSeen] = useState(loadHintSeen)
  const searchRef = useRef(null)
  const touchStartRef = useRef(null)
  const swipeDidHappenRef = useRef(false)

  const filtered = (() => {
    let list = vocab
    if (category !== 'All Words') list = list.filter(w => w.category === category)
    if (typeFilter !== 'all') list = list.filter(w => w.type === typeFilter)
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(w =>
        w.german.toLowerCase().includes(q) ||
        w.english.toLowerCase().includes(q)
      )
    }
    return list
  })()

  const total = filtered.length
  const word = filtered[Math.min(index, Math.max(0, total - 1))]
  const progress = total > 1 ? (index / (total - 1)) * 100 : 100
  const hasGrammar = word && word.forms !== null

  const markHintSeen = useCallback(() => {
    setHintSeen(true)
    localStorage.setItem('lingo-vocab-hint-seen', 'true')
  }, [])

  const goNext = useCallback(() => {
    if (index < total - 1) { setIndex(i => i + 1); setCardState('front') }
  }, [index, total])

  const goPrev = useCallback(() => {
    if (index > 0) { setIndex(i => i - 1); setCardState('front') }
  }, [index])

  const handleCatChange = useCallback((cat) => {
    setCategory(cat); setIndex(0); setCardState('front'); setShowCatPicker(false)
  }, [])

  const handleTypeFilter = useCallback((t) => {
    setTypeFilter(t); setIndex(0); setCardState('front')
  }, [])

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value); setIndex(0); setCardState('front')
  }, [])

  const clearSearch = useCallback(() => {
    setSearch(''); setIndex(0); setCardState('front'); searchRef.current?.focus()
  }, [])

  // Touch: swipe up on translated card expands grammar; swipe down on expanded collapses
  const onCardTouchStart = useCallback((e) => {
    touchStartRef.current = { y: e.touches[0].clientY, x: e.touches[0].clientX }
    swipeDidHappenRef.current = false
  }, [])

  const onCardTouchEnd = useCallback((e) => {
    if (!touchStartRef.current) return
    const dy = touchStartRef.current.y - e.changedTouches[0].clientY
    const dx = Math.abs(touchStartRef.current.x - e.changedTouches[0].clientX)
    touchStartRef.current = null
    if (Math.abs(dy) > 38 && Math.abs(dy) > dx) {
      swipeDidHappenRef.current = true
      if (dy > 0 && cardState === 'translated') {
        setCardState('expanded')
        if (!hintSeen) markHintSeen()
      } else if (dy < 0 && cardState === 'expanded') {
        setCardState('translated')
      }
    }
  }, [cardState, hintSeen, markHintSeen])

  // Tap: reveal translation; if already revealed, collapse to front
  const onCardClick = useCallback(() => {
    if (swipeDidHappenRef.current) { swipeDidHappenRef.current = false; return }
    setCardState(s => s === 'front' ? 'translated' : 'front')
  }, [])

  // Grammar button (always visible on translated, for desktop and accessibility)
  const expandGrammar = useCallback((e) => {
    e.stopPropagation()
    setCardState('expanded')
    if (!hintSeen) markHintSeen()
  }, [hintSeen, markHintSeen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT') return
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); goNext() }
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   { e.preventDefault(); goPrev() }
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        setCardState(s => {
          if (s === 'front') return 'translated'
          if (s === 'translated' && hasGrammar) return 'expanded'
          return 'front'
        })
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev, hasGrammar])

  if (!word) {
    return (
      <div className="vocab-view">
        <div className="flash-header">
          <span className="flash-cat-btn" style={{ opacity: 0.5 }}>No results</span>
          <button className="dark-toggle" onClick={onToggleDark}>
            {darkMode ? <Sun size={18} strokeWidth={1.75} /> : <Moon size={18} strokeWidth={1.75} />}
          </button>
        </div>
        <div className="vocab-empty">No words match your filters.</div>
      </div>
    )
  }

  const frontWord = reversed
    ? word.english
    : (word.article ? `${word.article} ${word.german}` : word.german)
  const backWord = reversed
    ? (word.article ? `${word.article} ${word.german}` : word.german)
    : word.english

  const showSwipeHint = cardState === 'translated' && !hintSeen && hasGrammar

  return (
    <div className="vocab-view">
      {/* Header */}
      <div className="flash-header vocab-header">
        <button
          className="flash-cat-btn"
          onClick={() => setShowCatPicker(p => !p)}
        >
          <GraduationCap size={16} strokeWidth={1.75} />
          <span>{category}</span>
          <span className="flash-cat-caret">▾</span>
        </button>
        <div className="flash-header-right">
          <span className="flash-counter">{index + 1} / {total}</span>
          <button className="dark-toggle" onClick={onToggleDark} aria-label="Toggle dark mode">
            {darkMode ? <Sun size={18} strokeWidth={1.75} /> : <Moon size={18} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {showCatPicker && (
        <div className="flash-cat-dropdown">
          {VOCAB_CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`flash-cat-option${cat === category ? ' flash-cat-option--active' : ''}`}
              onClick={() => handleCatChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Search */}
      <div className="vocab-search-row">
        <div className="vocab-search-wrap">
          <Search size={15} className="vocab-search-icon" strokeWidth={2} />
          <input
            ref={searchRef}
            type="search"
            className="vocab-search-input"
            placeholder="Search words…"
            value={search}
            onChange={handleSearch}
            autoComplete="off"
          />
          {search && (
            <button className="vocab-search-clear" onClick={clearSearch} aria-label="Clear">
              <X size={14} strokeWidth={2.5} />
            </button>
          )}
        </div>
      </div>

      {/* Type pills */}
      <div className="vocab-type-pills">
        {VOCAB_TYPES.map(({ id, label }) => (
          <button
            key={id}
            className={`vocab-type-pill${typeFilter === id ? ' vocab-type-pill--active' : ''}`}
            onClick={() => handleTypeFilter(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="flash-progress-bar">
        <div className="flash-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Scrollable card area */}
      <div className="vocab-scroll-area">
        <div
          className={`flash-card vocab-card${cardState !== 'front' ? ' flash-card--revealed' : ''}`}
          onClick={onCardClick}
          onTouchStart={onCardTouchStart}
          onTouchEnd={onCardTouchEnd}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && onCardClick()}
          aria-label={cardState === 'front' ? 'Reveal translation' : 'Hide card'}
        >
          {/* Always-visible front: the word */}
          <div className="vocab-card-front">
            <div className="vocab-front-meta">
              <span className="flash-category-badge">{word.category}</span>
              <WordTypeBadge type={word.type} />
              <span className="vocab-level-badge">{word.level}</span>
            </div>
            <p className="flash-german vocab-front-word">{frontWord}</p>
            {cardState === 'front' && word.example && !reversed && (
              <p className="vocab-example">{word.example}</p>
            )}
            {cardState === 'front' && (
              <p className="flash-tap-hint">tap to reveal</p>
            )}
          </div>

          {/* Translation section — fades in on tap */}
          {cardState !== 'front' && (
            <div className="vocab-translation-section">
              <p className="vocab-back-meaning">{backWord}</p>
              {word.example && <p className="vocab-example">{word.example}</p>}

              {/* First-time swipe nudge */}
              {showSwipeHint && (
                <div className="vocab-swipe-hint">
                  <ChevronUp size={15} strokeWidth={2.5} />
                  swipe up for grammar
                </div>
              )}

              {/* Grammar expand button (desktop + after hint is seen) */}
              {cardState === 'translated' && hasGrammar && (
                <button className="vocab-grammar-btn" onClick={expandGrammar}>
                  <ChevronUp size={13} strokeWidth={2.5} />
                  Grammar
                </button>
              )}
            </div>
          )}

          {/* Grammar section — slides in on swipe/click */}
          {cardState === 'expanded' && (
            <div className="vocab-grammar-section">
              {word.type === 'verb'      && <VerbTable forms={word.forms} />}
              {word.type === 'noun'      && <NounTable forms={word.forms} />}
              {word.type === 'adjective' && <AdjTable german={word.german} forms={word.forms} />}
            </div>
          )}
        </div>
      </div>

      {/* Always-visible nav actions */}
      <div className="flash-actions vocab-actions">
        <button
          className="flash-nav-btn"
          onClick={goPrev}
          disabled={index === 0}
          aria-label="Previous word"
        >
          <ChevronLeft size={22} strokeWidth={2} />
        </button>

        <button
          className="flash-flip-btn"
          onClick={onCardClick}
          aria-label={cardState === 'front' ? 'Reveal' : 'Hide'}
        >
          <RotateCcw size={18} strokeWidth={2} />
          <span>{cardState === 'front' ? 'Reveal' : 'Hide'}</span>
        </button>

        <button
          className="flash-nav-btn"
          onClick={goNext}
          disabled={index === total - 1}
          aria-label="Next word"
        >
          <ChevronRight size={22} strokeWidth={2} />
        </button>
      </div>

      <p className="flash-kb-hint">space to reveal · enter to expand · ← → navigate</p>
    </div>
  )
}
