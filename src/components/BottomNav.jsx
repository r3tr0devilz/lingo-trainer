const NAV_ITEMS = [
  { id: 'browse',    icon: '🗂️',  label: 'Browse'    },
  { id: 'swipe',     icon: '📖',  label: 'Learn'     },
  { id: 'bookmarks', icon: '🔖',  label: 'Saved'     },
  { id: 'search',    icon: '🔍',  label: 'Search'    },
]

export default function BottomNav({ activeView, onNavigate, darkMode }) {
  return (
    <nav className="bottom-nav" role="navigation" aria-label="Main navigation">
      {NAV_ITEMS.map(({ id, icon, label }) => (
        <button
          key={id}
          className={`nav-item${activeView === id ? ' nav-item--active' : ''}`}
          onClick={() => onNavigate(id)}
          aria-label={label}
          aria-current={activeView === id ? 'page' : undefined}
        >
          <span className="nav-icon">{icon}</span>
          <span className="nav-label">{label}</span>
        </button>
      ))}
    </nav>
  )
}
