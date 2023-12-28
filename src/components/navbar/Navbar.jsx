import DesktopNavigation from './DesktopNavbar'
import MobileNavigation from './MobileNavbar'

export default function Navbar() {
  return (
    <header className='relative z-50 flex flex-col'>
      <div className='top-0 z-10 h-16 pt-6'>
        <div className='flex justify-center'>
          <MobileNavigation className='md:hidden' />
          <DesktopNavigation className='hidden md:block' />
        </div>
      </div>
    </header>
  )
}
