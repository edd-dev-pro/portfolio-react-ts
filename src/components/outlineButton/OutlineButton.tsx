import type { FC } from 'react'

interface OutlineButtonProps {
  text: string
  href: string
  download?: string
  newTab?: boolean
}

const OutlineButton: FC<OutlineButtonProps> = ({
  text,
  href,
  download,
  newTab,
}) => {
  return (
    <a
      href={href}
      download={download}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
      className="font-mono text-xs lg:text-[0.625rem] text-primary hover:bg-primary hover:text-neutral-800 border border-primary p-2 rounded-sm transition-colors duration-300"
    >
      {text}
    </a>
  )
}

export default OutlineButton
