import type { ReactNode, FC } from 'react'

interface SocialLinkProps {
  href: string
  icon: ReactNode
}

const SocialLink: FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary transition-colors duration-300"
    >
      {icon}
    </a>
  )
}

export default SocialLink
