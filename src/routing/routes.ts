import HomeSection from '../sections/home/HomeSection'
import type { ComponentType } from 'react'

export interface AppRoute {
  name: string
  key: string
  path: string
  Component: ComponentType
}

const routes: AppRoute[] = [
  {
    name: 'Inicio',
    key: 'home',
    path: '/',
    Component: HomeSection,
  },
  //   {
  //     path: '/about',
  //     element: <About />,
  //   },
  //   {
  //     path: '*',
  //     element: <NotFound />,
  //   },
]

export default routes
