import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { links } from '../../data/links'
import { NavItem } from './Navbar'

export default function MobileNavigation({ pathname }) {
  return (
    <Popover className="md:hidden">
      <Popover.Button className='flex gap-3 items-center px-6 py-3 text-base border rounded-2xl border-white/10 text-zinc-400'>
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
            className='fixed z-50 p-8 pt-4 inset-x-4 top-6 rounded-2xl bg-zinc-900'
          >
            <div className='flex flex-row-reverse items-center'>
              <Popover.Button className="size-6 text-zinc-300">
                x
              </Popover.Button>
            </div>
            <nav className='-my-6 text-base text-zinc-400 last:pb-4 mt-2'>
              {links.map((link, index) => (
                <NavItem
                  key={index}
                  href={link.href}
                  label={link.label}
                  pathname={pathname}
                />
              ))}
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}
