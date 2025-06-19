interface AppRoute {
  name: string
  path: string
}

const routes: AppRoute[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Work Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
]

export default routes
