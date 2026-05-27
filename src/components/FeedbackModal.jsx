import { useState, useCallback, useEffect, useRef } from 'react'
import { X } from 'lucide-react'

const REPO = 'r3tr0devilz/lingo-trainer'
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN

async function postIssue(from, message) {
  const body = [
    from ? `**From:** ${from}` : '**From:** Anonymous',
    '',
    '**Message:**',
    message,
    '',
    '---',
    '*Submitted via Lingo Trainer in-app feedback*',
  ].join('\n')

  const res = await fetch(`https://api.github.com/repos/${REPO}/issues`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: `Feedback: ${message.slice(0, 60).replace(/\n/g, ' ')}${message.length > 60 ? '…' : ''}`,
      body,
      labels: ['feedback'],
    }),
  })

  if (!res.ok) throw new Error(`GitHub API error ${res.status}`)
}

export default function FeedbackModal({ onClose }) {
  const [from, setFrom] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const textareaRef = useRef(null)

  useEffect(() => {
    textareaRef.current?.focus()
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    if (!message.trim()) return
    setStatus('submitting')
    try {
      await postIssue(from.trim(), message.trim())
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }, [from, message])

  return (
    <div className="feedback-backdrop" onClick={onClose}>
      <div className="feedback-modal" onClick={e => e.stopPropagation()}>
        <div className="feedback-modal-header">
          <h2 className="feedback-modal-title">Send Feedback</h2>
          <button className="feedback-close-btn" onClick={onClose} aria-label="Close">
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        {status === 'success' ? (
          <div className="feedback-success">
            <p className="feedback-success-msg">Thanks! Your feedback was received.</p>
            <button className="feedback-submit-btn" onClick={onClose}>Done</button>
          </div>
        ) : (
          <form className="feedback-form" onSubmit={handleSubmit}>
            <label className="feedback-label">
              Name or email <span className="feedback-optional">(optional)</span>
              <input
                className="feedback-input"
                type="text"
                placeholder="e.g. Alex or alex@example.com"
                value={from}
                onChange={e => setFrom(e.target.value)}
                disabled={status === 'submitting'}
              />
            </label>

            <label className="feedback-label">
              Your feedback
              <textarea
                ref={textareaRef}
                className="feedback-textarea"
                placeholder="What's working well? What could be better?"
                value={message}
                onChange={e => setMessage(e.target.value)}
                disabled={status === 'submitting'}
                rows={5}
                required
              />
            </label>

            {status === 'error' && (
              <p className="feedback-error">Something went wrong — please try again.</p>
            )}

            <button
              className="feedback-submit-btn"
              type="submit"
              disabled={status === 'submitting' || !message.trim()}
            >
              {status === 'submitting' ? 'Sending…' : 'Send feedback'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
