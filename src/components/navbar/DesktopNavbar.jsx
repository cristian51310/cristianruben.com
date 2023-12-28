import { links } from '../../data/links'

function NavItem({ href, children }) {
  const path = window.location.pathname
  const isActive = path === href

  return (
    <a
      href={href}
      className={`${isActive ? 'text-amber-400 hover:text-amber-400' : 'text-neutral-400'} relative block text-base px-3 bg-transparent hover:bg-white/20 rounded-md transition-colors duration-500 `}
    >
      {children}
      {isActive && (
        <span className='absolute h-px inset-x-1 -bottom-px bg-gradient-to-r from-amber-400/0 via-amber-400/80 to-amber-400/0' />
      )}
    </a>
  )
}

export default function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className='flex px-5 py-3 text-xl transition border rounded-2xl border-white/10 bg-zinc-900/20 text-zinc-400 hover:text-white'>
        {links.map((link, index) => (
          <NavItem
            key={index}
            href={link.href}
          >
            {link.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}
