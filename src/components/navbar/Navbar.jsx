import DesktopNavigation from './DesktopNavbar'
import MobileNavigation from './MobileNavbar'

export function NavItem({ href, label, pathname }) {
  const isActive = pathname === href

  return (
    <a
      href={href}
      className={`${isActive ? 'text-amber-400 md:hover:text-amber-400' : 'text-neutral-400'} relative block px-3 py-3 md:py-0 text-lg md:text-base border-b md:border-0 border-neutral-800 md:hover:bg-white/20 rounded-md transition-colors duration-150 md:duration-500`}
    >
      {label}
      {isActive && (
        <span className='absolute h-px inset-x-1 -bottom-px bg-gradient-to-r from-amber-400/0 via-amber-400/80 to-amber-400/0' />
      )}
    </a>
  )
}


export default function Navbar({ pathname }) {
  return (
    <header className='relative z-50 flex flex-col'>
      <div className='top-0 z-10 h-16 pt-6'>
        <div className='flex justify-center'>
          <MobileNavigation pathname={pathname} className='md:hidden' />
          <DesktopNavigation pathname={pathname} className='hidden md:block' />
        </div>
      </div>
    </header>
  )
}
