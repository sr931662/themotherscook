import { useRef } from 'react'
import { Close } from './icons'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'
import { useFocusTrap } from '../hooks/useFocusTrap'

interface VideoModalProps {
  open: boolean
  onClose: () => void
  title: string
}

/** Placeholder video modal — swap the body for an embedded player when a video is ready. */
export function VideoModal({ open, onClose, title }: VideoModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useBodyScrollLock(open)
  useFocusTrap(dialogRef, open, onClose)

  if (!open) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        background: 'rgba(43, 24, 16, 0.6)',
      }}
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(880px, 100%)',
          aspectRatio: '16 / 9',
          background: 'var(--dark)',
          borderRadius: 'var(--radius-lg)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--paper)',
        }}
      >
        <button
          type="button"
          aria-label="Close video"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            width: 44,
            height: 44,
            borderRadius: '50%',
            border: '1px solid rgba(251,244,234,0.4)',
            background: 'transparent',
            color: 'var(--paper)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Close size={22} />
        </button>
        {/* TODO: replace with an embedded video player once brand footage is ready */}
        <p
          className="serif"
          style={{ fontSize: 20, opacity: 0.7, padding: '0 40px', textAlign: 'center' }}
        >
          Video coming soon — {title}
        </p>
      </div>
    </div>
  )
}
