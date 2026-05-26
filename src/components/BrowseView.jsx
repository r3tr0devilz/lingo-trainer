import { useMemo } from 'react'
import { BookOpen, ChevronRight, Languages, Sun, Moon } from 'lucide-react'
import { CATEGORY_ICONS } from '../data/categoryIcons.js'

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
          <span className="app-logo"><Languages size={26} strokeWidth={1.5} /></span>
          <h1 className="browse-title">Lingo Trainer</h1>
          <button
            className="dark-toggle"
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
          >
            {darkMode
              ? <Sun size={18} strokeWidth={1.75} />
              : <Moon size={18} strokeWidth={1.75} />
            }
          </button>
        </div>
        <p className="browse-subtitle">Choose a category to begin</p>
      </div>

      <div className="browse-content-wrap">
        <button
          className="category-tile category-tile--all"
          onClick={() => onSelectCategory('All Sentences')}
        >
          <span className="tile-icon"><BookOpen size={26} strokeWidth={1.5} /></span>
          <div className="tile-text">
            <span className="tile-name">All Sentences</span>
            <span className="tile-count">{sentences.length} sentences</span>
          </div>
          <span className="tile-arrow"><ChevronRight size={18} strokeWidth={2} /></span>
        </button>

        <div className="category-grid">
          {categories.map((cat) => {
            const Icon = CATEGORY_ICONS[cat] || BookOpen
            return (
              <button
                key={cat}
                className="category-tile"
                onClick={() => onSelectCategory(cat)}
              >
                <span className="tile-icon"><Icon size={26} strokeWidth={1.5} /></span>
                <div className="tile-text">
                  <span className="tile-name">{cat}</span>
                  <span className="tile-count">{countFor(cat)} sentences</span>
                </div>
                <span className="tile-arrow"><ChevronRight size={16} strokeWidth={2} /></span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
