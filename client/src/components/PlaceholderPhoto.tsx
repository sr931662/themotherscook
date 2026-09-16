interface PlaceholderPhotoProps {
  label: string
  className?: string
  background?: string
  /** Real photo source. When provided, renders the image instead of the placeholder box. */
  src?: string
  alt?: string
  width?: number
  height?: number
}

/**
 * Renders a real photo when `src` is supplied, and falls back to a labelled
 * placeholder box (standing in for an asset not yet supplied) otherwise.
 */
export function PlaceholderPhoto({
  label,
  className = '',
  background,
  src,
  alt,
  width,
  height,
}: PlaceholderPhotoProps) {
  const wrapperClassName = `placeholder ${className}`.trim()
  const wrapperStyle = background ? { backgroundColor: background } : undefined

  if (src) {
    return (
      <div className={wrapperClassName} style={wrapperStyle}>
        <img
          src={src}
          alt={alt ?? label}
          width={width}
          height={height}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    )
  }

  return (
    <div className={wrapperClassName} style={wrapperStyle} role="img" aria-label={label}>
      <span className="placeholderLabel" aria-hidden="true">
        {label}
      </span>
    </div>
  )
}
