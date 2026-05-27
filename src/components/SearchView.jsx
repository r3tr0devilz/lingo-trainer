import { useState, useCallback, useRef } from 'react'
import { Search, X, Sun, Moon, Bookmark, BookmarkCheck, Languages, ArrowLeftRight, Loader } from 'lucide-react'
import SettingsMenu from './SettingsMenu.jsx'

async function translate(text, dir) {
  const [src, tgt] = dir === 'en-de' ? ['en', 'de'] : ['de', 'en']
  const res = await fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${src}|${tgt}`
  )
  if (!res.ok) throw new Error('Network error')
  const data = await res.json()
  if (data.responseStatus !== 200) throw new Error('Translation failed')
  return data.responseData.translatedText
}

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
  const [showTranslate, setShowTranslate] = useState(false)
  const [translateInput, setTranslateInput] = useState('')
  const [translateDir, setTranslateDir] = useState('en-de')
  const [translateResult, setTranslateResult] = useState('')
  const [translateStatus, setTranslateStatus] = useState('idle') // idle | loading | done | error
  const inputRef = useRef(null)

  const swapDir = useCallback(() => {
    setTranslateDir(d => d === 'en-de' ? 'de-en' : 'en-de')
    setTranslateResult('')
  }, [])

  const handleTranslate = useCallback(async () => {
    if (!translateInput.trim()) return
    setTranslateStatus('loading')
    setTranslateResult('')
    try {
      const result = await translate(translateInput.trim(), translateDir)
      setTranslateResult(result)
      setTranslateStatus('done')
    } catch {
      setTranslateStatus('error')
    }
  }, [translateInput, translateDir])

  const handleTranslateKeyDown = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleTranslate()
    }
  }, [handleTranslate])

  const toggleTranslate = useCallback(() => {
    setShowTranslate(s => {
      if (!s) setTimeout(() => inputRef.current?.focus(), 50)
      return !s
    })
  }, [])

  const dirLabel = translateDir === 'en-de'
    ? { from: 'English', to: 'German' }
    : { from: 'German', to: 'English' }

  return (
    <div className="search-view">
      <div className="secondary-header">
        <h2 className="secondary-title">
          <Search size={20} strokeWidth={1.75} /> Search
        </h2>
        <div className="header-actions">
          <SettingsMenu />
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

      <div className="search-bar-wrapper">
        <span className="search-icon"><Search size={16} strokeWidth={1.75} /></span>
        <input
          type="search"
          className="search-input"
          placeholder="Search English or German..."
          value={query}
          onChange={e => onQueryChange(e.target.value)}
          autoComplete="off"
          spellCheck="false"
          autoFocus
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

      {/* Translate toggle pill */}
      <div className="translate-toggle-row">
        <button
          className={`translate-toggle-btn${showTranslate ? ' translate-toggle-btn--active' : ''}`}
          onClick={toggleTranslate}
        >
          <Languages size={14} strokeWidth={1.75} />
          <span>Translate</span>
          <span className="translate-toggle-caret">{showTranslate ? '▴' : '▾'}</span>
        </button>
      </div>

      {/* Translate panel */}
      {showTranslate && (
        <div className="translate-panel">
          <div className="translate-dir-row">
            <span className="translate-lang">{dirLabel.from}</span>
            <button className="translate-swap-btn" onClick={swapDir} aria-label="Swap languages">
              <ArrowLeftRight size={16} strokeWidth={2} />
            </button>
            <span className="translate-lang">{dirLabel.to}</span>
          </div>

          <textarea
            ref={inputRef}
            className="translate-input"
            placeholder={`Type ${dirLabel.from} here…`}
            value={translateInput}
            onChange={e => { setTranslateInput(e.target.value); setTranslateResult('') }}
            onKeyDown={handleTranslateKeyDown}
            rows={3}
          />

          <button
            className="translate-submit-btn"
            onClick={handleTranslate}
            disabled={translateStatus === 'loading' || !translateInput.trim()}
          >
            {translateStatus === 'loading'
              ? <><Loader size={14} strokeWidth={2} className="translate-spinner" /> Translating…</>
              : 'Translate'
            }
          </button>

          {translateStatus === 'done' && translateResult && (
            <div className="translate-result">
              <p className="translate-result-label">{dirLabel.to}</p>
              <p className="translate-result-text">{translateResult}</p>
            </div>
          )}

          {translateStatus === 'error' && (
            <p className="translate-error">Translation failed — check your connection and try again.</p>
          )}
        </div>
      )}

      <div className="search-results">
        {!query.trim() && !showTranslate && (
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
