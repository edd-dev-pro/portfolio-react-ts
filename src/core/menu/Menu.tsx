import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import routes from '../../routing/routes'
import classNames from 'classnames'

const Menu = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleNavigate = (path: string) => {
    setOpen(false)
    setTimeout(() => {
      navigate(path)
    }, 250)
  }

  return (
    <div className="absolute top-6 right-6 z-50">
      {/* Botón hamburguesa */}
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="group relative w-12 h-10 flex flex-col justify-center gap-[6px] cursor-pointer z-50"
      >
        {/* Línea 1 */}
        <span
          className={classNames(
            'block h-[6px] w-1/2 bg-white rounded-full transition-all duration-300 origin-center',
            open
              ? 'rotate-45 translate-y-[12px] w-full'
              : 'w-1/2 self-start group-hover:w-full',
          )}
        />
        {/* Línea 2 */}
        <span
          className={classNames(
            'block h-[6px] w-full bg-white rounded-full transition-all duration-300 origin-center',
            open ? 'opacity-0' : 'group-hover:w-full',
          )}
        />
        {/* Línea 3 */}
        <span
          className={classNames(
            'block h-[6px] w-1/2 bg-white rounded-full transition-all duration-300 origin-center',
            open
              ? '-rotate-45 -translate-y-[12px] w-full'
              : 'w-1/2 self-end group-hover:w-full',
          )}
        />
      </button>

      {/* Overlay */}
      <div
        className={classNames(
          'absolute top-1/2 right-1/2 w-[100px] h-[100px] rounded-full transition-transform duration-500 ease-out -translate-y-1/2 translate-x-1/2',
          open ? 'scale-[60]' : 'scale-0',
        )}
        style={{
          background:
            'linear-gradient(135deg, var(--color-primary), var(--color-secondary), var(--color-accent))',
          zIndex: -1,
        }}
      />
      {/* Navegación */}
      {open && (
        <nav className="fixed inset-0 flex flex-col items-center justify-center text-center">
          <ul className="space-y-6">
            {routes.map(({ path, name }) => (
              <li key={path}>
                <button
                  onClick={() => handleNavigate(path)}
                  className={classNames(
                    'font-mono tracking-[0.3em] text-3xl md:text-5xl transition-opacity duration-300 cursor-pointer',
                    pathname === path
                      ? 'opacity-100'
                      : 'opacity-80 hover:opacity-100',
                  )}
                  tabIndex={0}
                  aria-current={pathname === path ? 'page' : undefined}
                >
                  {name.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}

export default Menu
