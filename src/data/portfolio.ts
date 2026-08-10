export interface Project {
  id: string
  title: string
  category: string
  year: string
  blurb: string
  image: string
  tags: string[]
  link?: string
}

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Open Test Solutions',
    category: 'Payment Systems · Integration and Certification',
    year: '2025',
    blurb:
      'FIS® Open Test Solutions (OTS) provide virtualized, SaaS-based automated testing, validation, and certification for electronic payment transactions, card networks, ATMs, and payment hubs. It allows financial institutions to simulate payment schemes and run certification test scripts remotely',
    image: '/images/OTS_pic.png',
    tags: ['SaaS Product', 'Angular', 'RESTful Web API', 'CI/CD'],
    link: 'https://www.fisglobal.com/products/open-test-solutions',
  },
  {
    id: 'p2',
    title: 'Card Management System',
    category: 'Web · Card Issuance · Card Processing',
    year: '2015',
    blurb:
      'A complete card management system for close loop prepaid cards from issuance to processing – Inventory, Activation, Recharge and Transaction processing',
    image: '/images/CMS.png',
    tags: ['AUTH', 'Recharge', 'Pre-paid cards', 'POS Integration', 'ISO8583'],
    link: '',
  },
  {
    id: 'p3',
    title: 'Marlowe & Co.',
    category: 'E-commerce · Brand & Web',
    year: '2024',
    blurb:
      'A boutique fashion storefront with an editorial soul — art-directed product pages and a checkout that feels like a personal stylist.',
    image: 'https://images.pexels.com/photos/7620619/pexels-photo-7620619.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['E-commerce', 'Art Direction', 'Shopify', 'Brand'],
    link: 'https://example.com/marlowe-co',
  },
  {
    id: 'p4',
    title: 'Spectra Identity',
    category: 'Branding · Visual System',
    year: '2023',
    blurb:
      'A fluid visual identity for an independent music label — a generative gradient system that shifts with every release.',
    image: 'https://images.pexels.com/photos/12564253/pexels-photo-12564253.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Branding', 'Generative', 'Type', 'Motion'],
    link: 'https://example.com/spectra-identity',
  },
  {
    id: 'p5',
    title: 'Loft Creative Suite',
    category: 'SaaS · Product Design',
    year: '2023',
    blurb:
      'A collaborative design tool for independent studios — canvas, comments, and version history that never gets in the way.',
    image: 'https://images.pexels.com/photos/131187/pexels-photo-131187.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['SaaS', 'Collaboration', 'Canvas', 'UX'],
    link: 'https://example.com/loft-creative-suite',
  },
  {
    id: 'p6',
    title: 'Pulse Market Monitor',
    category: 'Web · Dashboard',
    year: '2022',
    blurb:
      'A market intelligence platform distilling thousands of signals into a single, honest pulse — designed for analysts who hate noise.',
    image: 'https://images.pexels.com/photos/38808473/pexels-photo-38808473.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Dashboard', 'Data Viz', 'React', 'Design System'],
    link: 'https://example.com/pulse-market-monitor',
  },
]

export interface SkillGroup {
  title: string
  items: string[]
}

export const SKILLS: SkillGroup[] = [
  {
    title: 'Design',
    items: ['Product Design', 'Design Systems', 'Interaction & Motion', 'Prototyping', 'Art Direction', 'Accessibility'],
  },
  {
    title: 'Engineering',
    items: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Node.js', 'Figma API'],
  },
  {
    title: 'Tooling',
    items: ['Figma', 'Linear', 'Storybook', 'Vite', 'Git', 'Lottie'],
  },
]

export interface ExperienceItem {
  role: string
  company: string
  period: string
  location: string
  summary: string
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Principal Product Designer',
    company: 'Northwind Studio',
    period: '2023 — Present',
    location: 'Stockholm, SE',
    summary:
      'Lead designer for a multi-product design system used across six apps. Partnered with engineering to ship a token-driven component library adopted by 40+ designers.',
  },
  {
    role: 'Senior Product Designer',
    company: 'Fjord',
    period: '2021 — 2023',
    location: 'Copenhagen, DK',
    summary:
      'Owned end-to-end design for the flagship mobile banking app, lifting activation by 28% and earning a Red Dot nomination for the onboarding flow.',
  },
  {
    role: 'Product Designer',
    company: 'Marlowe & Co.',
    period: '2019 — 2021',
    location: 'London, UK',
    summary:
      'Designed and built the e-commerce storefront and brand system for a fashion startup, taking it from concept to a profitable first-year launch.',
  },
  {
    role: 'Front-End Developer',
    company: 'Loft Labs',
    period: '2017 — 2019',
    location: 'Berlin, DE',
    summary:
      'Built the first version of a collaborative creative tool in React and TypeScript, establishing the code patterns the team still uses today.',
  },
]

export const SERVICES: { title: string; description: string }[] = [
  {
    title: 'Product Design',
    description:
      'End-to-end product thinking — from messy first sketches to a polished, shipped interface your users actually love.',
  },
  {
    title: 'Design Systems',
    description:
      'Token-driven, accessible component libraries that scale across teams without losing their soul.',
  },
  {
    title: 'Front-End Engineering',
    description:
      'Production React + TypeScript code that matches the design down to the pixel, with motion that feels intentional.',
  },
  {
    title: 'Brand & Art Direction',
    description:
      'Visual identities and art direction that give digital products a distinctive, memorable voice.',
  },
]
