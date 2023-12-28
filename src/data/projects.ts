import NextJS from "../components/icons/NextJS.astro"
import React from "../components/icons/React.astro"
import Vercel from "../components/icons/Vercel.astro"
import Astro from "../components/icons/AstroJS.astro"
import JavaScript from "../components/icons/JavaScript.astro"
import TypeScript from "../components/icons/TypeScript.astro"
import TailwindCSS from "../components/icons/TailwindCSS.astro"
import Prisma from "../components/icons/Prisma.astro"

const TAGS = {
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

export const projects = [
  {
    title: 'Kuil',
    description: 'Pagina web ecommerce y dashboard de administracion para Kuil, una marca de lapices ecológicos',
    pubDate: 'Jul 08 2022',
    heroImage: '/images/projects/kuil.webp',
    webpage: 'https://kuil.com.mx',
    github: null,
    tags: [TAGS.REACT, TAGS.NEXTJS, TAGS.JS]
  },
  {
    title: 'Portafolio',
    description: 'Mi portafolio personal de codigo abierto en el cual muestro mis proyectos y articulos de blog',
    pubDate: 'Jul 08 2022',
    heroImage: '/images/projects/portfolio.webp',
    webpage: 'https://cristianfigueroa.vercel.app/',
    github: 'https://github.com/cristian51310/cristianruben.com',
    tags: [TAGS.VERCEL, TAGS.ASTRO, TAGS.TAILWIND]
  },
  {
    title: 'Ring!',
    description: 'Un marketplace digital enfocado a restaurantes, el cual permite comprar comida a domicilio (aun en desarrollo)',
    pubDate: 'Jul 08 2023',
    heroImage: '/images/projects/ring.webp',
    webpage: 'https://ring-eccommerce.vercel.app/',
    github: null,
    tags: [TAGS.REACT, TAGS.NEXTJS, TAGS.TS, TAGS.TAILWIND]
  }
]