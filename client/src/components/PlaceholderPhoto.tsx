interface PlaceholderPhotoProps {
  label: string
  className?: string
  background?: string
}

/** Labelled placeholder box standing in for a photo asset not yet supplied. */
export function PlaceholderPhoto({ label, className = '', background }: PlaceholderPhotoProps) {
  return (
    <div
      className={`placeholder ${className}`.trim()}
      style={background ? { backgroundColor: background } : undefined}
      role="img"
      aria-label={label}
    >
      <span className="placeholderLabel" aria-hidden="true">
        {label}
      </span>
    </div>
  )
}
