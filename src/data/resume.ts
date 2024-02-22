import { TAGS } from "./tags"

export const resume = {
  education: [
    {
      title: "Ingenieria en software",
      start: "2021",
      end: "Actualidad",
      place: "Universidad Politecnica de Pénjamo",
      country: "Mexico",
    },
    {
      title: "Tecnico en programacion",
      start: "2019",
      end: "2021",
      place: "Centro de bachillerato tecnologico industrial y de servicios 171",
      country: "Mexico",
    },
  ],
  experience: [
    {
      title: "Kuil - Lápices Ecológicos",
      start: "2022",
      company: {
        es: "Freelancer",
        en: "Freelancer"
      },
      description: {
        es: "Dirigí el desarrollo y la implementación de un eficiente sistema de inventario para Kuil, optimizando significativamente la gestión de productos. Asimismo, diseñé y construí una aplicación web integral que impulsó las ventas y mejoró la experiencia del usuario en la compra de productos.",
        en: "I led the development and implementation of an efficient inventory system for Kuil, significantly optimizing product management. Additionally, I designed and built a comprehensive web application that boosted sales and enhanced the user experience in purchasing products."
      },
      achievements: {
        es: [
          "Optimización significativa en la gestión de inventario.",
          "Incremento notable en las ventas a través de la aplicación web desarrollada."
        ],
        en: [
          "Significant optimization in inventory management.",
          "Notable increase in sales through the developed web application."
        ]
      }
    },
    {
      title: "Dorichangos",
      start: "2023",
      company: {
        es: "Freelancer",
        en: "Freelancer"
      },
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
  ],
  stack: [
    TAGS.REACT,
    TAGS.ASTRO,
    TAGS.NEXTJS,
    TAGS.JS,
    TAGS.TS,
    TAGS.PRISMA,
    TAGS.NODEJS,
    TAGS.GIT,
    TAGS.GITHUB,
    TAGS.TAILWIND,
  ],
  skills: [
    {
      title: "Desarollo Web"
    },
    {
      title: "Desarrollo Movil"
    },
    {
      title: "Gestion de BD"
    },
    {
      title: "Ingles A2"
    },
  ],
}