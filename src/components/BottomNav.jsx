import { LayoutGrid, BookOpen, Bookmark, Search, Languages, Sun, Moon } from 'lucide-react'

const NAV_ITEMS = [
  { id: 'browse',    Icon: LayoutGrid, label: 'Browse'    },
  { id: 'swipe',     Icon: BookOpen,   label: 'Learn'     },
  { id: 'bookmarks', Icon: Bookmark,   label: 'Saved'     },
  { id: 'search',    Icon: Search,     label: 'Search'    },
]

export default function BottomNav({ activeView, onNavigate, darkMode, onToggleDark }) {
  return (
    <nav className="bottom-nav" role="navigation" aria-label="Main navigation">
      {/* Brand lockup — visible only on desktop sidebar */}
      <div className="sidebar-brand">
        <span className="sidebar-brand-icon"><Languages size={22} strokeWidth={1.5} /></span>
        <span className="sidebar-brand-title">Lingo Trainer</span>
      </div>

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

      {/* Spacer + dark toggle — visible only on desktop sidebar */}
      <div className="sidebar-spacer" />
      <button
        className="sidebar-dark-toggle"
        onClick={onToggleDark}
        aria-label="Toggle dark mode"
      >
        {darkMode
          ? <Sun size={18} strokeWidth={1.75} />
          : <Moon size={18} strokeWidth={1.75} />
        }
        <span>{darkMode ? 'Light mode' : 'Dark mode'}</span>
      </button>
    </nav>
  )
}
