import clsx from "clsx"
import { useEffect, useState } from "react"

function ColorButton({ handleClick, isSelected, className }) {
  return (
    <button
      onClick={handleClick}
      className={clsx(
        "p-2 hover:cursor-pointer dark:hover:bg-neutral-600/60 hover:bg-neutral-400/50 rounded-md",
        isSelected ? "dark:bg-neutral-600/50 bg-neutral-300/50" : "bg-transparent"
      )}
    >
      <span className={clsx(
        `w-4 h-4 rounded-full flex`,
        className
      )}></span>
    </button>
  )
}

export default function ColorSelector() {
  const [tint, setTint] = useState('blue')

  const $document = document.documentElement

  useEffect(() => {
    const savedTint = localStorage.getItem('tint')

    if (!savedTint) {
      setTint("blue")

      localStorage.setItem('tint', tint)
      $document.style.setProperty('--bg-tint', `var(--bg-${tint})`)
      $document.style.setProperty('--dark-bg-tint', `var(--dark-bg-${tint})`)
      $document.style.setProperty('--title-tint', `var(--title-${tint})`)
      $document.style.setProperty('--dark-title-tint', `var(--dark-title-${tint})`)
    }

    if (savedTint) {
      setTint(savedTint)

      $document.style.setProperty('--bg-tint', `var(--bg-${savedTint})`)
      $document.style.setProperty('--dark-bg-tint', `var(--dark-bg-${savedTint})`)
      $document.style.setProperty('--title-tint', `var(--title-${savedTint})`)
      $document.style.setProperty('--dark-title-tint', `var(--dark-title-${savedTint})`)
    }
  }, [tint])

  const toggleTint = (tint) => {
    setTint(tint)
    localStorage.setItem('tint', tint)
  }

  return (
    <div className="flex border rounded-md dark:border-neutral-600 border-neutral-400">
      <ColorButton
        handleClick={() => toggleTint('blue')}
        isSelected={tint === 'blue'}
        className="bg-[var(--title-blue)] dark:bg-[var(--dark-title-blue)]"
      />
      <ColorButton
        handleClick={() => toggleTint('green')}
        isSelected={tint === 'green'}
        className="bg-[var(--title-green)] dark:bg-[var(--dark-title-green)]"
      />
      <ColorButton
        handleClick={() => toggleTint('purple')}
        isSelected={tint === 'purple'}
        className="bg-[var(--title-purple)] dark:bg-[var(--dark-title-purple)]"
      />
      <ColorButton
        handleClick={() => toggleTint('yellow')}
        isSelected={tint === 'yellow'}
        className="bg-[var(--title-yellow)] dark:bg-[var(--dark-title-yellow)]"
      />
      <ColorButton
        handleClick={() => toggleTint('red')}
        isSelected={tint === 'red'}
        className="bg-[var(--title-red)] dark:bg-[var(--dark-title-red)]"
      />
    </div>
  )
}
