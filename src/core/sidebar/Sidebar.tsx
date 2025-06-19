import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { RiArrowRightSFill } from 'react-icons/ri'
import { FaXTwitter } from 'react-icons/fa6'
import { SocialLink } from '../../components'

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex h-screen text-white flex-col justify-between items-center py-10 shadow-sidebar">
      <div className="font-lobster text-xl whitespace-nowrap tracking-[.10rem]">
        edd<span className="text-primary">.</span>dev
      </div>

      <div className="rotate-[90deg] text-[12px] font-mono flex items-center tracking-[.25rem]">
        FOLLOW ME <RiArrowRightSFill className="text-primary" />
      </div>

      <div className="flex flex-col items-center gap-4 mt-6 text-lg">
        <SocialLink href="https://github.com/" icon={<FaGithub />} />
        <SocialLink href="https://instagram.com/" icon={<FaInstagram />} />
        <SocialLink href="https://twitter.com/" icon={<FaXTwitter />} />
        <SocialLink href="https://linkedin.com/" icon={<FaLinkedin />} />
      </div>
    </aside>
  )
}

export default Sidebar
