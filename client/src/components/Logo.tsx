import logoSrc from '../assets/logo.png'

interface LogoProps {
  size?: number
}

/** The Mothers Cook brand mark. */
export function Logo({ size = 54 }: LogoProps) {
  return (
    <img
      src={logoSrc}
      alt=""
      width={size}
      height={size}
      style={{ width: size, height: size, flexShrink: 0, display: 'block' }}
    />
  )
}
