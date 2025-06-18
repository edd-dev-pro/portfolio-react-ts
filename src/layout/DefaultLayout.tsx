import type { ReactNode, FC } from 'react'
import { useLocation } from 'react-router-dom'

import Sidebar from '../core/sidebar/Sidebar'
import SectionIndicator from '../core/sectionIndicator/SectionIndicator'

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  const location = useLocation()

  const getCurrentSection = () => {
    switch (location.pathname) {
      case '/':
        return 'HOME'
      case '/about':
        return 'ABOUT'
      default:
        return ''
    }
  }

  return (
    <div className="lg:flex lg:p-0 p-8">
      <Sidebar />

      <div className="flex flex-1 justify-center items-center relative overflow-hidden">
        <main>{children}</main>
        <SectionIndicator current={getCurrentSection()} />
      </div>
    </div>
  )
}

export default DefaultLayout
