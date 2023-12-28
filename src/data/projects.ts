import { TAGS } from "./tags"

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