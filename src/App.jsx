import { useState, useMemo, useCallback, useEffect } from 'react'
import sentences from './data/sentences.js'
import SwipeView from './components/SwipeView.jsx'
import BrowseView from './components/BrowseView.jsx'
import BookmarksView from './components/BookmarksView.jsx'
import SearchView from './components/SearchView.jsx'
import BottomNav from './components/BottomNav.jsx'

const CATEGORIES = [
  'All Sentences',
  'Greetings & Small Talk',
  'Work & Professional',
  'Friends & Casual',
  'Travel & Directions',
  'Shopping',
  'Restaurants & Food',
  'Health & Medical',
  'Emergency',
  'Family',
  'Dating & Romance',
]

function loadBookmarks() {
  try {
    const raw = localStorage.getItem('lingo-bookmarks')
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch {
    return new Set()
  }
}

function loadDarkMode() {
  try {
    const raw = localStorage.getItem('lingo-dark-mode')
    if (raw !== null) return JSON.parse(raw)
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  } catch {
    return false
  }
}

export default function App() {
  const [activeView, setActiveView] = useState('browse')
  const [currentCategory, setCurrentCategory] = useState('All Sentences')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [bookmarks, setBookmarks] = useState(loadBookmarks)
  const [darkMode, setDarkMode] = useState(loadDarkMode)
  const [searchQuery, setSearchQuery] = useState('')

  // Persist bookmarks
  useEffect(() => {
    localStorage.setItem('lingo-bookmarks', JSON.stringify([...bookmarks]))
  }, [bookmarks])

  // Persist dark mode
  useEffect(() => {
    localStorage.setItem('lingo-dark-mode', JSON.stringify(darkMode))
  }, [darkMode])

  const filteredSentences = useMemo(() => {
    if (currentCategory === 'All Sentences') return sentences
    return sentences.filter(s => s.category === currentCategory)
  }, [currentCategory])

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const q = searchQuery.toLowerCase()
    return sentences.filter(
      s =>
        s.english.toLowerCase().includes(q) ||
        s.german.toLowerCase().includes(q)
    )
  }, [searchQuery])

  const bookmarkedSentences = useMemo(() => {
    return sentences.filter(s => bookmarks.has(s.id))
  }, [bookmarks])

  const toggleBookmark = useCallback((id) => {
    setBookmarks(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const toggleDarkMode = useCallback(() => {
    setDarkMode(d => !d)
  }, [])

  const navigateTo = useCallback((category, index = 0) => {
    setCurrentCategory(category)
    setCurrentIndex(index)
    setActiveView('swipe')
  }, [])

  const handleCategorySelect = useCallback((category) => {
    setCurrentCategory(category)
    setCurrentIndex(0)
    setActiveView('swipe')
  }, [])

  const handleSearchResultSelect = useCallback((sentence) => {
    const catSentences = sentences.filter(s => s.category === sentence.category)
    const idx = catSentences.findIndex(s => s.id === sentence.id)
    setCurrentCategory(sentence.category)
    setCurrentIndex(idx >= 0 ? idx : 0)
    setActiveView('swipe')
  }, [])

  const handleBookmarkSelect = useCallback((sentence) => {
    const catSentences = sentences.filter(s => s.category === sentence.category)
    const idx = catSentences.findIndex(s => s.id === sentence.id)
    setCurrentCategory(sentence.category)
    setCurrentIndex(idx >= 0 ? idx : 0)
    setActiveView('swipe')
  }, [])

  return (
    <div className={`app${darkMode ? ' dark' : ''}`}>
      <div className="view-container">
        {activeView === 'swipe' && (
          <SwipeView
            sentences={filteredSentences}
            startIndex={currentIndex}
            onIndexChange={setCurrentIndex}
            bookmarks={bookmarks}
            onBookmark={toggleBookmark}
            darkMode={darkMode}
            onToggleDark={toggleDarkMode}
            currentCategory={currentCategory}
          />
        )}
        {activeView === 'browse' && (
          <BrowseView
            categories={CATEGORIES.slice(1)}
            sentences={sentences}
            onSelectCategory={handleCategorySelect}
            darkMode={darkMode}
            onToggleDark={toggleDarkMode}
          />
        )}
        {activeView === 'bookmarks' && (
          <BookmarksView
            sentences={bookmarkedSentences}
            bookmarks={bookmarks}
            onBookmark={toggleBookmark}
            onSelect={handleBookmarkSelect}
            darkMode={darkMode}
            onToggleDark={toggleDarkMode}
          />
        )}
        {activeView === 'search' && (
          <SearchView
            query={searchQuery}
            onQueryChange={setSearchQuery}
            results={searchResults}
            bookmarks={bookmarks}
            onBookmark={toggleBookmark}
            onSelect={handleSearchResultSelect}
            darkMode={darkMode}
            onToggleDark={toggleDarkMode}
          />
        )}
      </div>

      <BottomNav activeView={activeView} onNavigate={setActiveView} darkMode={darkMode} onToggleDark={toggleDarkMode} />
    </div>
  )
}
