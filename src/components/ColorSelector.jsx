import clsx from "clsx"
import { useEffect, useState } from "react"

export default function ColorSelector() {
  const [tint, setTint] = useState('blue')

  const $document = document.documentElement

  const COLORS = [
    "blue",
    "green",
    "purple",
    "yellow",
  ]

  useEffect(() => {
    const savedTint = localStorage.getItem('tint')

    if (savedTint) {
      setTint(savedTint)

      $document.style.setProperty('--bg-tint', `var(--bg-${savedTint})`)
      $document.style.setProperty('--dark-bg-tint', `var(--dark-bg-${tint})`)
      $document.style.setProperty('--title-tint', `var(--title-${savedTint})`)
      $document.style.setProperty('--dark-title-tint', `var(--dark-title-${tint})`)
    }
  }, [tint])

  const toggleTint = (tint) => {
    setTint(tint)
    localStorage.setItem('tint', tint)
  }

  return (
    <div className="flex border rounded-md dark:border-neutral-600 border-neutral-400">
      {COLORS.map((color) => {
        const colorTint = "bg-" + color + "-400"
        const isSelected = color === tint

        return (
          <button
            key={color}
            onClick={() => toggleTint(color)}
            className={clsx(
              "p-2 hover:cursor-pointer dark:hover:bg-neutral-600/60 hover:bg-neutral-400/50 rounded-md",
              isSelected ? "dark:bg-neutral-600/50 bg-neutral-300/50" : "bg-transparent"
            )}
          >
            <span className={`w-4 h-4 ${colorTint} rounded-full flex`}></span>
          </button>
        )
      })}
    </div>
  )
}
