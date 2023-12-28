import { links } from '../../data/links'
import { NavItem } from './Navbar'

export default function DesktopNavigation({ pathname }) {
  return (
    <nav className='hidden md:block'>
      <ul className='flex px-5 py-3 text-xl transition border rounded-2xl border-white/10 bg-zinc-900/20 text-zinc-400 hover:text-white'>
        {links.map((link, index) => (
          <NavItem
            key={index}
            href={link.href}
            label={link.label}
            pathname={pathname}
          />
        ))}
      </ul>
    </nav>
  )
}
