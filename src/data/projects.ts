import { TAGS } from "./tags"

export const projects = [
  {
    title: 'Kuil',
    description: {
      es: 'Pagina web ecommerce y dashboard de administracion para Kuil, una marca de lapices ecológicos',
      en: 'Ecommerce website and administration dashboard for Kuil, an ecological pencil brand'
    },
    pubDate: 'Jul 08 2022',
    heroImage: '/images/projects/kuil.webp',
    webpage: 'https://kuil.com.mx',
    github: null,
    tags: [TAGS.REACT, TAGS.NEXTJS, TAGS.JS]
  },
  {
    title: 'Ring!',
    description: {
      es: "Un marketplace digital enfocado a restaurantes, que permite comprar comida a domicilio (aún en desarrollo)",
      en: "A digital marketplace focused on restaurants, which allows you to buy food at home (still in development)"
    },
    pubDate: 'Jul 08 2023',
    heroImage: '/images/projects/ring.webp',
    webpage: 'https://ring-eccommerce.vercel.app/',
    github: null,
    tags: [TAGS.REACT, TAGS.NEXTJS, TAGS.TS, TAGS.TAILWIND]
  }
]