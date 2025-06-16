import type { ComponentType } from 'react'
import { Home, About } from '../pages'

interface AppRoute {
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
    Component: Home,
  },
  {
    name: 'Sobre mí',
    key: 'about',
    path: '/about',
    Component: About,
  },
]

export default routes
