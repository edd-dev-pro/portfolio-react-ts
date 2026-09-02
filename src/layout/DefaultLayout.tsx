import type { ReactNode, FC } from 'react'
import { useLocation } from 'react-router-dom'

import Sidebar from '../core/sidebar/Sidebar'
import SectionIndicator from '../core/sectionIndicator/SectionIndicator'
import Menu from '../core/menu/Menu'
import { LavaBlobs } from '../components/'

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  const { pathname } = useLocation()
  const HOME = pathname === '/'

  return (
    <div id="default-layout" className="flex min-h-dvh w-full">
      <Sidebar />
      <div
        id="main-container"
        className="relative grid flex-1 grid-cols-4 items-center gap-x-4 overflow-hidden px-10 md:grid-cols-8 md:gap-x-6 md:px-6 lg:grid-cols-12 lg:gap-x-8 lg:px-8"
      >
        {HOME && <LavaBlobs />}
        <Menu />
        <main
          id="main"
          className="col-span-4 md:col-span-8 lg:col-span-10 lg:col-start-2"
        >
          {children}
        </main>
        <SectionIndicator current={pathname} />
      </div>
    </div>
  )
}

export default DefaultLayout
