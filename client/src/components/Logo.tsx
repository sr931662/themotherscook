interface LogoProps {
  size?: number
}

/** Placeholder mark standing in for the brand logo asset. */
export function Logo({ size = 54 }: LogoProps) {
  return (
    <span
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'var(--soft)',
        color: 'var(--acc)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-serif)',
        fontSize: size * 0.34,
        flexShrink: 0,
      }}
    >
      TMC
    </span>
  )
}
