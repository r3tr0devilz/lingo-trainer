import { useRef, useEffect } from 'react'

export default function SearchView({
  query,
  onQueryChange,
  results,
  bookmarks,
  onBookmark,
  onSelect,
  darkMode,
  onToggleDark,
}) {
  const inputRef = useRef(null)

  useEffect(() => {
    // Auto-focus when view mounts
    setTimeout(() => inputRef.current?.focus(), 100)
  }, [])

  return (
    <div className="search-view">
      <div className="secondary-header">
        <h2 className="secondary-title">
          <span>🔍</span> Search
        </h2>
        <button
          className="dark-toggle"
          onClick={onToggleDark}
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="search-bar-wrapper">
        <span className="search-icon">🔍</span>
        <input
          ref={inputRef}
          type="search"
          className="search-input"
          placeholder="Search English or German..."
          value={query}
          onChange={e => onQueryChange(e.target.value)}
          autoComplete="off"
          spellCheck="false"
        />
        {query && (
          <button
            className="search-clear"
            onClick={() => onQueryChange('')}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      <div className="search-results">
        {!query.trim() && (
          <div className="empty-state">
            <span className="empty-icon">🇩🇪</span>
            <p className="empty-title">Search all sentences</p>
            <p className="empty-hint">Type English or German to find matching sentences</p>
          </div>
        )}

        {query.trim() && results.length === 0 && (
          <div className="empty-state">
            <span className="empty-icon">🤔</span>
            <p className="empty-title">No results</p>
            <p className="empty-hint">Try a different word or phrase</p>
          </div>
        )}

        {results.map((sentence) => {
          const isBookmarked = bookmarks.has(sentence.id)
          return (
            <div key={sentence.id} className="search-result-item">
              <button
                className="search-result-content"
                onClick={() => onSelect(sentence)}
              >
                <span className="result-category">{sentence.category}</span>
                <p className="result-english">{sentence.english}</p>
                <p className="result-german">{sentence.german}</p>
                <p className="result-pronunciation">{sentence.pronunciation}</p>
              </button>
              <button
                className={`result-bookmark${isBookmarked ? ' result-bookmark--active' : ''}`}
                onClick={() => onBookmark(sentence.id)}
                aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark'}
              >
                {isBookmarked ? '🔖' : '🏷️'}
              </button>
            </div>
          )
        })}

        {results.length > 0 && (
          <p className="results-count">{results.length} result{results.length !== 1 ? 's' : ''}</p>
        )}
      </div>
    </div>
  )
}
