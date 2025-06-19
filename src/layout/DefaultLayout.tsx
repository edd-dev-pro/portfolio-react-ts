import type { ReactNode, FC } from 'react'

import Sidebar from '../core/sidebar/Sidebar'
import SectionIndicator from '../core/sectionIndicator/SectionIndicator'
import Menu from '../core/menu/Menu'

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="lg:flex lg:p-0">
      <Sidebar />
      <div className="flex flex-1 justify-center items-center relative overflow-hidden">
        <Menu />
        <main className="p-8">{children}</main>
        <SectionIndicator current="HOME" />
      </div>
    </div>
  )
}

export default DefaultLayout
