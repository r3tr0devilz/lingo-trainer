import { useState, useRef, useCallback, useEffect } from 'react'
import SentenceCard from './SentenceCard.jsx'

/**
 * SwipeView - TikTok/Reels-style full-screen sentence swiper.
 *
 * Animation state machine:
 *   idle        -> at rest, draggable
 *   dragging    -> following finger, live translateY
 *   snap-back   -> spring back to 0 (transition on)
 *   fly-up      -> old card exits upward (transition on)
 *   fly-down    -> old card exits downward (transition on)
 *   in-bottom   -> new card appears at +100vh, NO transition (instant reposition)
 *   in-top      -> new card appears at -100vh, NO transition
 *   settling    -> new card transitions from ±100vh to 0
 */
export default function SwipeView({
  sentences,
  startIndex = 0,
  onIndexChange,
  bookmarks,
  onBookmark,
  darkMode,
  onToggleDark,
  currentCategory,
}) {
  const [index, setIndex] = useState(() => Math.min(startIndex, Math.max(0, sentences.length - 1)))
  const [stage, setStage] = useState('idle')
  const [dragOffset, setDragOffset] = useState(0)
  const pendingIndexRef = useRef(null)
  const touchStartYRef = useRef(0)
  const touchStartXRef = useRef(0)
  const lastIndexRef = useRef(startIndex)

  // Sync when parent changes startIndex (e.g., switching category)
  useEffect(() => {
    const safeIdx = Math.min(startIndex, Math.max(0, sentences.length - 1))
    if (safeIdx !== lastIndexRef.current) {
      lastIndexRef.current = safeIdx
      setIndex(safeIdx)
      setStage('idle')
      setDragOffset(0)
    }
  }, [startIndex, sentences])

  // Report index changes upward
  useEffect(() => {
    onIndexChange?.(index)
    lastIndexRef.current = index
  }, [index, onIndexChange])

  const total = sentences.length
  const sentence = sentences[Math.min(index, total - 1)]

  const canGoNext = index < total - 1
  const canGoPrev = index > 0

  const goNext = useCallback(() => {
    if (!canGoNext) return
    navigator.vibrate?.(8)
    pendingIndexRef.current = index + 1
    setStage('fly-up')
  }, [index, canGoNext])

  const goPrev = useCallback(() => {
    if (!canGoPrev) return
    navigator.vibrate?.(8)
    pendingIndexRef.current = index - 1
    setStage('fly-down')
  }, [index, canGoPrev])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (stage !== 'idle' && stage !== 'drag') return
      if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
        e.preventDefault()
        goNext()
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev, stage])

  const handleTransitionEnd = useCallback(() => {
    if (stage === 'fly-up' || stage === 'fly-down') {
      const newIndex = pendingIndexRef.current
      const enterStage = stage === 'fly-up' ? 'in-bottom' : 'in-top'
      setIndex(newIndex)
      setStage(enterStage)
      // After browser paints the offscreen position, start settling
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setStage('settling')
        })
      })
    } else if (stage === 'snap-back') {
      setDragOffset(0)
      setStage('idle')
    } else if (stage === 'settling') {
      setStage('idle')
    }
  }, [stage])

  // Touch handlers
  const onTouchStart = useCallback((e) => {
    if (stage !== 'idle') return
    if (e.target.closest('.card-fabs, .card-top-bar')) return
    touchStartYRef.current = e.touches[0].clientY
    touchStartXRef.current = e.touches[0].clientX
    setStage('dragging')
  }, [stage])

  const onTouchMove = useCallback((e) => {
    if (stage !== 'dragging') return
    const deltaY = e.touches[0].clientY - touchStartYRef.current
    const deltaX = e.touches[0].clientX - touchStartXRef.current
    if (Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      setStage('idle')
      return
    }
    e.preventDefault()
    // Rubber-band resistance at boundaries
    const atBoundary = (deltaY < 0 && !canGoNext) || (deltaY > 0 && !canGoPrev)
    setDragOffset(atBoundary ? deltaY / 3 : deltaY)
  }, [stage, canGoNext, canGoPrev])

  const onTouchEnd = useCallback(() => {
    if (stage !== 'dragging') return
    if (dragOffset < -50 && canGoNext) {
      pendingIndexRef.current = index + 1
      setStage('fly-up')
    } else if (dragOffset > 50 && canGoPrev) {
      pendingIndexRef.current = index - 1
      setStage('fly-down')
    } else {
      setStage('snap-back')
    }
  }, [stage, dragOffset, index, canGoNext, canGoPrev])

  // Compute card style
  const getTransform = () => {
    switch (stage) {
      case 'fly-up':    return 'translateY(calc(-1 * var(--card-fly-distance, 105vh)))'
      case 'fly-down':  return 'translateY(var(--card-fly-distance, 105vh))'
      case 'in-bottom': return 'translateY(var(--card-fly-distance, 105vh))'
      case 'in-top':    return 'translateY(calc(-1 * var(--card-fly-distance, 105vh)))'
      case 'dragging':  return `translateY(${dragOffset}px)`
      case 'snap-back': return 'translateY(0)'
      case 'settling':  return 'translateY(0)'
      default:          return 'translateY(0)'
    }
  }

  const getTransition = () => {
    // No transition during drag or instant repositions
    if (stage === 'dragging' || stage === 'in-bottom' || stage === 'in-top' || stage === 'idle') {
      return 'none'
    }
    return 'transform 0.38s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  }

  if (!sentence) {
    return (
      <div className="swipe-view swipe-view--empty">
        <p>No sentences found.</p>
      </div>
    )
  }

  // Progress: fraction through current category
  const progress = total > 1 ? index / (total - 1) : 1

  return (
    <div className="swipe-view">
      {/* Swipe hint arrows */}
      <div
        className={`swipe-hint swipe-hint--up${canGoNext ? ' swipe-hint--visible' : ''}`}
        style={{ opacity: dragOffset < -20 ? Math.min(1, Math.abs(dragOffset) / 80) : 0 }}
      >
        ↑
      </div>
      <div
        className={`swipe-hint swipe-hint--down${canGoPrev ? ' swipe-hint--visible' : ''}`}
        style={{ opacity: dragOffset > 20 ? Math.min(1, dragOffset / 80) : 0 }}
      >
        ↓
      </div>

      {/* Touch handlers live here — swipe-stage is the actual touch surface */}
      <div
        className="swipe-stage"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="swipe-card-wrapper"
          style={{
            transform: getTransform(),
            transition: getTransition(),
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          <SentenceCard
            sentence={sentence}
            index={index}
            total={total}
            progress={progress}
            bookmarks={bookmarks}
            onBookmark={onBookmark}
            darkMode={darkMode}
            onToggleDark={onToggleDark}
            onNext={goNext}
            onPrev={goPrev}
            canGoNext={canGoNext}
            canGoPrev={canGoPrev}
          />
        </div>

        {/* Keyboard nav hint — badge style on desktop */}
        <div className="keyboard-hint">
          <span>↑↓ arrow keys</span>
        </div>
      </div>
    </div>
  )
}
