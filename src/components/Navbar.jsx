import { Popover, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef } from 'react'
import { generalLinks } from '../data/links'

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <Popover.Button className='flex gap-3 items-center px-6 py-3 text-base font-medium border rounded-2xl border-white/10 bg-zinc-900/20 text-zinc-400 backdrop-blur'>
        Menu
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 12 12"><path fill="currentColor" d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1c.3-.3.8-.3 1.1 0l2.7 2.7l2.7-2.7c.3-.3.8-.3 1.1 0c.3.3.3.8 0 1.1l-3.2 3.2c-.2.2-.4.3-.6.3" /></svg>
      </Popover.Button>

      <Transition.Root>
        <Popover.Overlay className='fixed inset-0 z-50 backdrop-blur-md bg-zinc-900/20' />

        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-150 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            className='fixed z-50 p-8 pt-4 origin-top inset-x-4 top-6 rounded-2xl bg-zinc-900'
          >
            <div className='flex flex-row-reverse items-center justify-between'>
              <Popover.Button className='p-1'>
                <span className='size-6 text-zinc-400'>x</span>
              </Popover.Button>
            </div>
            <nav className='mt-6'>
              <ul className='-my-6 text-base text-zinc-400 last:pb-4'>
                {generalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className='block py-3 text-lg border-b border-neutral-800 text-neutral-300'
                  >
                    {link.label}
                  </a>
                ))}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavItem({ href, children }) {
  const path = window.location.pathname
  const isActive = path === href

  return (
    <a
      href={href}
      className={`${isActive ? 'text-amber-400 hover:text-amber-400' : 'text-neutral-300'} relative block text-base px-3 bg-transparent hover:bg-white/20 rounded-md transition-colors duration-500 `}
    >
      {children}
      {isActive && (
        <span className='absolute h-px inset-x-1 -bottom-px bg-gradient-to-r from-amber-400/0 via-amber-400/80 to-amber-400/0' />
      )}
    </a>
  )
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className='flex px-5 py-3 text-xl transition border rounded-2xl border-white/10 bg-zinc-900/20 text-zinc-400 backdrop-blur hover:text-white'>
        {generalLinks.map((link, index) => (
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

function clamp(number, a, b) {
  const min = Math.min(a, b)
  const max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

export function Navbar() {
  const headerRef = useRef()
  const isInitial = useRef(true)

  useEffect(() => {
    const downDelay = 24
    const upDelay = 24

    function setProperty(property, value) {
      document.documentElement.style.setProperty(property, value)
    }

    function updateHeaderStyles() {
      const { top, height } = headerRef.current.getBoundingClientRect()
      const scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      )

      if (isInitial.current) {
        setProperty('--header-position', 'sticky')
      }

      setProperty('--content-offset', `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`)
        setProperty('--header-mb', `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        const offset = Math.max(height, scrollY - upDelay)
        setProperty('--header-height', `${offset}px`)
        setProperty('--header-mb', `${height - offset}px`)
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`)
        setProperty('--header-mb', `${-scrollY}px`)
      }
    }

    function updateStyles() {
      updateHeaderStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener('scroll', updateStyles, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateStyles, { passive: true })
    }
  }, [])

  return (
    <header
      className='relative z-50 flex flex-col pointer-events-none'
      style={{
        height: 'var(--header-height)',
        marginBottom: 'var(--header-mb)'
      }}
    >
      <div
        ref={headerRef}
        className='top-0 z-10 h-16 pt-6'
        style={{ position: 'var(--header-position)' }}
      >
        <div className='flex justify-center flex-1'>
          <MobileNavigation className='pointer-events-auto md:hidden' />
          <DesktopNavigation className='hidden pointer-events-auto md:block' />
        </div>
      </div>
    </header>
  )
}
