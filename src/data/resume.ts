import { TAGS } from "./tags"

interface Educacion {
  title: string
  start: string
  end: string
  place: string
  country: string
}

export interface Experience {
  company: string
  start: string
  title: string
  description: ExperienceDescription
  achievements: AchievementItems
}

interface ExperienceDescription {
  en: string
  es: string
}

interface AchievementItems {
  es: string[]
  en: string[]
}

interface Project {
  title: string
  description: ProjectDescription
  pubDate: string
  heroImage: string
  webpage: string
  github: string | null
  tags: any[]
}

interface ProjectDescription {
  en: string
  es: string
}

interface Resumen {
  education: Educacion[]
  experience: Experience[]
  projects: Project[]
  stack: any[]
}

export const resume: Resumen = {
  education: [
    {
      title: "Ingenieria en software",
      start: "2021",
      end: "Actualidad",
      place: "Universidad Politecnica de Pénjamo",
      country: "Gto, Mexico",
    },
    {
      title: "Tecnico en programacion",
      start: "2019",
      end: "2021",
      place: "Centro de bachillerato tecnologico industrial y de servicios 171",
      country: "Gto, Mexico",
    },
  ],
  experience: [
    {
      company: "Dorichangos",
      start: "2023",
      title: "Freelancer",
      description: {
        es: "Desarrollé un sitio web y una plataforma de comercio electrónico para Dorichangos, permitiendo a los usuarios comprar productos de manera sencilla. Implementé un dashboard integral para la administración eficiente de productos y pedidos, mejorando la eficacia operativa de la empresa.",
        en: "I developed a website and an e-commerce platform for Dorichangos, enabling users to easily purchase products. Implemented a comprehensive dashboard for efficient product and order management, enhancing the operational effectiveness of the company."
      },
      achievements: {
        es: [
          "Simplificación del proceso de compra para usuarios.",
          "Mejora significativa en la eficiencia operativa mediante el dashboard implementado."
        ],
        en: [
          "Streamlining the purchasing process for users.",
          "Significant improvement in operational efficiency through the implemented dashboard."
        ]
      }
    },
  ],
  projects: [
    {
      title: 'Dorichangos',
      description: {
        es: 'Sistema de reservaciones y ecommerce. Permite reservar mesas y hacer pedidos en línea.',
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
        es: 'Aplicación de gestión de proyectos basada en la metodología Kanban.',
        en: 'Project management application based on the Kanban methodology.'
      },
      pubDate: 'Jan 08 2024',
      heroImage: '/images/projects/team-pilot.webp',
      webpage: 'https://team-pilot.vercel.app',
      github: null,
      tags: [TAGS.REACT, TAGS.NEXTJS, TAGS.TS, TAGS.VERCEL]
    },
  ],
  stack: [
    TAGS.HTML,
    TAGS.CSS,
    TAGS.JS,
    TAGS.TS,
    TAGS.REACT,
    TAGS.ASTRO,
    TAGS.NEXTJS,
    TAGS.PRISMA,
    TAGS.NODEJS,
    TAGS.GIT,
    TAGS.GITHUB,
    TAGS.TAILWIND,
    TAGS.MYSQL,
    TAGS.POSTGRESS
  ],
}