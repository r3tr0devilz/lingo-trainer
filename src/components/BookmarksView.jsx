import { Bookmark, BookmarkX, X, Sun, Moon, BookOpen } from 'lucide-react'
import { CATEGORY_ICONS } from '../data/categoryIcons.js'

export default function BookmarksView({
  sentences,
  bookmarks,
  onBookmark,
  onSelect,
  darkMode,
  onToggleDark,
}) {
  const grouped = sentences.reduce((acc, s) => {
    if (!acc[s.category]) acc[s.category] = []
    acc[s.category].push(s)
    return acc
  }, {})

  const categories = Object.keys(grouped)

  return (
    <div className="bookmarks-view">
      <div className="secondary-header">
        <h2 className="secondary-title">
          <Bookmark size={20} strokeWidth={1.75} /> Saved
        </h2>
        <div className="header-actions">
          <span className="bookmark-count">{sentences.length} saved</span>
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
      </div>

      <div className="bookmarks-content">
        {sentences.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon"><BookmarkX size={52} strokeWidth={1.25} /></span>
            <p className="empty-title">No bookmarks yet</p>
            <p className="empty-hint">Tap the save button on any sentence card while swiping</p>
          </div>
        ) : (
          categories.map((cat) => {
            const Icon = CATEGORY_ICONS[cat] || BookOpen
            return (
              <div key={cat} className="bookmark-group">
                <h3 className="bookmark-group-heading">
                  <Icon size={14} strokeWidth={2} />
                  <span>{cat}</span>
                  <span className="bookmark-group-count">{grouped[cat].length}</span>
                </h3>
                <div className="bookmark-list">
                  {grouped[cat].map((sentence) => (
                    <div key={sentence.id} className="bookmark-item">
                      <button
                        className="bookmark-item-content"
                        onClick={() => onSelect(sentence)}
                      >
                        <p className="bm-english">{sentence.english}</p>
                        <p className="bm-german">{sentence.german}</p>
                        <p className="bm-pronunciation">{sentence.pronunciation}</p>
                      </button>
                      <button
                        className="bm-remove"
                        onClick={() => onBookmark(sentence.id)}
                        aria-label="Remove bookmark"
                        title="Remove"
                      >
                        <X size={16} strokeWidth={2} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
