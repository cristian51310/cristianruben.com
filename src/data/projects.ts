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
    title: 'Dorichangos',
    description: {
      es: 'Sistema de reservaciones y comercio electrónico. Permite reservar mesas y hacer pedidos en línea.',
      en: 'Reservation and e-commerce system. Allows customers to book tables and place orders online.'
    },
    pubDate: 'Dec 08 2023',
    heroImage: '/images/projects/dorichangos.webp',
    webpage: 'https://dorichangos.vercel.app',
    github: null,
    tags: [TAGS.REACT, TAGS.NEXTJS, TAGS.TS, TAGS.VERCEL]
  },
  {
    title: 'TeamPilot',
    description: {
      es: 'Aplicación de gestión de proyectos basada en la metodología Kanban, soporte cooperativo para trabajar en equipo y asignar responsabilidades.',
      en: 'Project management application based on the Kanban methodology, cooperative support for teamwork and assigning responsibilities.'
    },
    pubDate: 'Jan 08 2024',
    heroImage: '/images/projects/team-pilot.webp',
    webpage: 'https://team-pilot.vercel.app',
    github: null,
    tags: [TAGS.REACT, TAGS.NEXTJS, TAGS.TS, TAGS.VERCEL]
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