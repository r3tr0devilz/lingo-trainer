import { useState, useEffect, useRef } from 'react'
import { Settings } from 'lucide-react'
import FeedbackModal from './FeedbackModal.jsx'

export default function SettingsMenu({ children }) {
  const [open, setOpen] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const close = (e) => {
      if (!menuRef.current?.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [open])

  return (
    <div className="settings-menu" ref={menuRef}>
      <button
        className={`flash-settings-btn${open ? ' flash-settings-btn--active' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Settings"
      >
        <Settings size={18} strokeWidth={1.75} />
      </button>

      {open && (
        <div className="settings-menu-panel">
          {children}
          <button
            className="flash-feedback-link"
            onClick={() => { setShowFeedback(true); setOpen(false) }}
          >
            Send feedback
          </button>
        </div>
      )}

      {showFeedback && <FeedbackModal onClose={() => setShowFeedback(false)} />}
    </div>
  )
}
