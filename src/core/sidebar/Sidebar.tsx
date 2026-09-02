import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa'
import { RiArrowRightSFill } from 'react-icons/ri'
import { FaXTwitter } from 'react-icons/fa6'
import { SocialLink } from '../../components'

const Sidebar = () => {
  return (
    <aside
      id="sidebar"
      className="hidden md:flex flex-col items-center justify-between self-stretch py-10 text-white shadow-sidebar"
    >
      <div className="font-lobster text-xl whitespace-nowrap tracking-[.10rem]">
        edd<span className="text-primary">&</span>dev
      </div>

      <div className="rotate-[90deg] text-[12px] font-mono flex items-center tracking-[.25rem]">
        FOLLOW ME <RiArrowRightSFill className="text-primary" />
      </div>

      <div className="flex flex-col items-center gap-4 mt-6 text-lg">
        <SocialLink href="https://github.com/edd-dev-pro" icon={<FaGithub />} />
        <SocialLink
          href="https://www.facebook.com/eddanddev"
          icon={<FaFacebookSquare />}
        />
        <SocialLink href="https://x.com/edd__dev" icon={<FaXTwitter />} />
        <SocialLink
          href="https://www.linkedin.com/in/edd-dev"
          icon={<FaLinkedin />}
        />
      </div>
    </aside>
  )
}

export default Sidebar
