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

export default function BookmarksView({
  sentences,
  bookmarks,
  onBookmark,
  onSelect,
  darkMode,
  onToggleDark,
}) {
  // Group by category, preserving a nice order
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
          <span>🔖</span> Saved Sentences
        </h2>
        <div className="header-actions">
          <span className="bookmark-count">{sentences.length} saved</span>
          <button
            className="dark-toggle"
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      <div className="bookmarks-content">
        {sentences.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">🏷️</span>
            <p className="empty-title">No bookmarks yet</p>
            <p className="empty-hint">Tap the save button on any sentence card while swiping</p>
          </div>
        ) : (
          categories.map((cat) => (
            <div key={cat} className="bookmark-group">
              <h3 className="bookmark-group-heading">
                <span>{CATEGORY_ICONS[cat] || '📝'}</span>
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
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
