import type { FC } from 'react'
import classNames from 'classnames'

interface BlinkingCursorProps {
  char?: '_' | '|' | '‾' | '⎸'
  color?: string
  size?: string
  speed?: 'slow' | 'normal' | 'fast'
}

const BlinkingCursor: FC<BlinkingCursorProps> = ({
  char = '_',
  color = 'text-primary',
  size = 'text-sm',
  speed = 'normal',
}) => {
  const animationClass = {
    normal: '[animation:var(--animation-blink)]',
    fast: '[animation:var(--animation-blink-fast)]',
    slow: '[animation:var(--animation-blink-slow)]',
  }[speed]

  return (
    <span className={classNames(animationClass, color, size, 'font-bold')}>
      {char}
    </span>
  )
}

export default BlinkingCursor
