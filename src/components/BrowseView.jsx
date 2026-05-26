import { useMemo } from 'react'

const CATEGORY_ICONS = {
  'Greetings & Small Talk': '👋',
  'Work & Professional':    '💼',
  'Friends & Casual':       '😄',
  'Travel & Directions':    '✈️',
  'Shopping':               '🛍️',
  'Restaurants & Food':     '🍽️',
  'Health & Medical':       '🏥',
  'Emergency':              '🚨',
  'Family':                 '👨‍👩‍👧',
  'Dating & Romance':       '❤️',
}

export default function BrowseView({
  categories,
  sentences,
  onSelectCategory,
  darkMode,
  onToggleDark,
}) {
  const countByCategory = useMemo(() => {
    const map = {}
    for (const s of sentences) {
      map[s.category] = (map[s.category] || 0) + 1
    }
    return map
  }, [sentences])
  const countFor = (cat) => countByCategory[cat] ?? 0

  return (
    <div className="browse-view">
      <div className="browse-header">
        <div className="browse-title-row">
          <span className="app-logo">🇩🇪</span>
          <h1 className="browse-title">Lingo Trainer</h1>
          <button
            className="dark-toggle"
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
        <p className="browse-subtitle">Choose a category to begin</p>
      </div>

      {/* All Sentences tile */}
      <button
        className="category-tile category-tile--all"
        onClick={() => onSelectCategory('All Sentences')}
      >
        <span className="tile-icon">📚</span>
        <div className="tile-text">
          <span className="tile-name">All Sentences</span>
          <span className="tile-count">{sentences.length} sentences</span>
        </div>
        <span className="tile-arrow">→</span>
      </button>

      <div className="category-grid">
        {categories.map((cat) => (
          <button
            key={cat}
            className="category-tile"
            onClick={() => onSelectCategory(cat)}
          >
            <span className="tile-icon">{CATEGORY_ICONS[cat] || '📝'}</span>
            <div className="tile-text">
              <span className="tile-name">{cat}</span>
              <span className="tile-count">{countFor(cat)} sentences</span>
            </div>
            <span className="tile-arrow">→</span>
          </button>
        ))}
      </div>
    </div>
  )
}
