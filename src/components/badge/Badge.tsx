import type { FC } from 'react'

interface BadgeProps {
  tech: string
}

const Badge: FC<BadgeProps> = ({ tech }) => {
  return (
    <div className="font-mono text-xs lg:text-[0.625rem] text-primary bg-neutral-700 rounded-sm p-1.5">
      #{tech}
    </div>
  )
}

export default Badge
