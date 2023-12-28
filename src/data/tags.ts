import Astro from "../components/icons/AstroJS.astro"
import JavaScript from "../components/icons/JavaScript.astro"
import NextJS from "../components/icons/NextJS.astro"
import Prisma from "../components/icons/Prisma.astro"
import React from "../components/icons/React.astro"
import TailwindCSS from "../components/icons/TailwindCSS.astro"
import TypeScript from "../components/icons/TypeScript.astro"
import Vercel from "../components/icons/Vercel.astro"

export const TAGS = {
  NEXTJS: {
    name: 'Next.js',
    class: 'border-neutral-300 text-neutral-300',
    icon: NextJS
  },
  REACT: {
    name: 'React',
    class: 'border-blue-500 text-blue-500',
    icon: React
  },
  VERCEL: {
    name: 'Vercel',
    class: 'border-black text-black',
    icon: Vercel
  },
  ASTRO: {
    name: 'Astro',
    class: 'border-purple-500 text-purple-500',
    icon: Astro
  },
  JS: {
    name: 'JavaScript',
    class: 'border-yellow-500 text-yellow-500',
    icon: JavaScript
  },
  TS: {
    name: 'TypeScript',
    class: 'border-blue-500 text-blue-500',
    icon: TypeScript
  },
  TAILWIND: {
    name: 'TailwindCSS',
    class: 'border-blue-500 text-blue-500',
    icon: TailwindCSS
  },
  PRISMA: {
    name: 'Prisma',
    class: 'border-blue-500 text-blue-500',
    icon: Prisma
  }
}