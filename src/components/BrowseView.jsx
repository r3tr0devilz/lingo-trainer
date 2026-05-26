import { useMemo } from 'react'
import {
  MessageCircle, Briefcase, Users, Compass,
  ShoppingBag, UtensilsCrossed, Stethoscope,
  AlertTriangle, Home, Heart, BookOpen, ChevronRight, Languages,
} from 'lucide-react'

const CATEGORY_ICONS = {
  'Greetings & Small Talk': MessageCircle,
  'Work & Professional':    Briefcase,
  'Friends & Casual':       Users,
  'Travel & Directions':    Compass,
  'Shopping':               ShoppingBag,
  'Restaurants & Food':     UtensilsCrossed,
  'Health & Medical':       Stethoscope,
  'Emergency':              AlertTriangle,
  'Family':                 Home,
  'Dating & Romance':       Heart,
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
          <span className="app-logo"><Languages size={26} strokeWidth={1.5} /></span>
          <h1 className="browse-title">Lingo Trainer</h1>
          <button
            className="dark-toggle"
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
          >
            {darkMode
              ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
              : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
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
