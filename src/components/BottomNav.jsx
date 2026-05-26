import { LayoutGrid, BookOpen, Bookmark, Search } from 'lucide-react'

const NAV_ITEMS = [
  { id: 'browse',    Icon: LayoutGrid, label: 'Browse'    },
  { id: 'swipe',     Icon: BookOpen,   label: 'Learn'     },
  { id: 'bookmarks', Icon: Bookmark,   label: 'Saved'     },
  { id: 'search',    Icon: Search,     label: 'Search'    },
]

export default function BottomNav({ activeView, onNavigate }) {
  return (
    <nav className="bottom-nav" role="navigation" aria-label="Main navigation">
      {NAV_ITEMS.map(({ id, Icon, label }) => (
        <button
          key={id}
          className={`nav-item${activeView === id ? ' nav-item--active' : ''}`}
          onClick={() => onNavigate(id)}
          aria-label={label}
          aria-current={activeView === id ? 'page' : undefined}
        >
          <span className="nav-icon"><Icon size={22} strokeWidth={1.75} /></span>
          <span className="nav-label">{label}</span>
        </button>
      ))}
    </nav>
  )
}
