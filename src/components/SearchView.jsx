import { useRef, useEffect } from 'react'
import { Search, X, Sun, Moon, Bookmark, BookmarkCheck, Languages } from 'lucide-react'

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
    setTimeout(() => inputRef.current?.focus(), 100)
  }, [])

  return (
    <div className="search-view">
      <div className="secondary-header">
        <h2 className="secondary-title">
          <Search size={20} strokeWidth={1.75} /> Search
        </h2>
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

      <div className="search-bar-wrapper">
        <span className="search-icon"><Search size={16} strokeWidth={1.75} /></span>
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
            <X size={16} strokeWidth={2} />
          </button>
        )}
      </div>

      <div className="search-results">
        {!query.trim() && (
          <div className="empty-state">
            <span className="empty-icon"><Languages size={52} strokeWidth={1.25} /></span>
            <p className="empty-title">Search all sentences</p>
            <p className="empty-hint">Type English or German to find matching sentences</p>
          </div>
        )}

        {query.trim() && results.length === 0 && (
          <div className="empty-state">
            <span className="empty-icon"><Search size={52} strokeWidth={1.25} /></span>
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
                {isBookmarked
                  ? <BookmarkCheck size={20} strokeWidth={1.75} />
                  : <Bookmark size={20} strokeWidth={1.75} />
                }
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
