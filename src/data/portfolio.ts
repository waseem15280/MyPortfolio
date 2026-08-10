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
    year: '',
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
    year: '',
    blurb:
      'A complete card management system for close loop prepaid cards from issuance to processing – Inventory, Activation, Recharge and Transaction processing',
    image: '/images/CMS.png',
    tags: ['AUTH', 'Recharge', 'Pre-paid cards', 'POS Integration', 'ISO8583'],
    link: '',
  },
  {
    id: 'p3',
    title: 'Enterprise WorkForce Management Software',
    category: 'ERP · Retail',
    year: '',
    blurb:
      'A comprehensive workforce management system for retail operations — streamlining scheduling, time tracking, and performance analytics.',
    image: '/images/PDI-Workforce-Top-Image.jpg',
    tags: ['SaaS', 'C#.net', 'Asp.net', 'Multitenancy'],
    link: 'https://pditechnologies.com/increase-productivity/erp-back-office/enterprise-retail-software/pdi-enterprise-workforce/',
  },
  {
    id: 'p4',
    title: 'ISO 8583 Transaction Switch Monitoring Dashboard',
    category: 'Gift Card Processing · Switching',
    year: '',
    blurb:
      'A real-time monitoring system for ISO 8583 transaction switches, providing insights into transaction flows and system performance.',
    image: '/images/Gift Cards.png',
    tags: ['Real-time', 'Transaction Analytics', 'SSRS', 'SSAS'],
    link: 'https://blackhawknetwork.com/solutions/gift-cards-egifts/product-overview',
  },
  {
    id: 'p5',
    title: 'ATM Testlab',
    category: 'Test Framework · Product Enhancement',
    year: '',
    blurb:
      'A comprehensive testing environment for ATM functionality, components and software, enabling teams to simulate various scenarios and validate performance.',
    image: '/images/ATM Testlab.png',
    tags: ['Virtual Simulation', 'ATM as a Service', 'UX'],
    link: 'https://www.fisglobal.com/products/fis-payments-one-debit-suite/fis-atm-processing',
  },
  {
    id: 'p6',
    title: 'CAPEX',
    category: 'Web · Dashboard',
    year: '',
    blurb:
      'An automation solution to ensure all purchases are aligned with the budget sanctioned.',
    image: '/images/pngtree.png',
    tags: ['Dashboard', 'Workflow Automation', 'BPM'],
    link: 'https://comm-it.in/case-studies/capex-based-purchase-approval-process-automation/',
  },
]

export interface SkillGroup {
  title: string
  items: string[]
}

export const SKILLS: SkillGroup[] = [
  {
    title: 'Design',
    items: ['JIRA', 'Storytelling|Sprint', 'diagrams.net', 'Figma', 'Bolt', 'Power BI'],
  },
  {
    title: 'Engineering',
    items: ['React|Angular|TypeScript', 'RESTful APIs', 'C#|.net|Core', 'Dapper', 'Azure', 'MS SQL Server|PostgreSQL'],
  },
  {
    title: 'Tooling',
    items: ['Jenkins', 'WIX', 'n8n', 'Git|svn', 'CheckMarx SAST+SCA'],
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
    role: 'Software Architect',
    company: 'Self-employed | Consultant for Altimind Services LLP',
    period: 'Jun,2026 — Present',
    location: 'New Delhi, IN',
    summary:
      'Supervising development of SaaS based products for ERP and AI integration engagements.',
  },
  {
    role: 'Senior Software Architect',
    company: 'FIS Global Business Solutions',
    period: 'Jan,2026 — Jun,2026',
    location: 'Noida, IN',
    summary:
      'Security compliance engagements and POC for secret management using IBM HashiCorp Vault.',
  },
  {
    role: 'IT Architect',
    company: 'FIS Global Business Solutions',
    period: '2018 — Jan,2026',
    location: 'Noida, IN',
    summary:
      'Developed Open Test Solutions(OTS). Certification management portal and knowledgeBase repository subsystems for OTS.',
  },
  {
    role: 'Programmer Analyst, Senior',
    company: 'FIS Global Business Solutions',
    period: '2015 — 2018',
    location: 'Noida, IN',
    summary:
      'Contributed to the development of open test framework. ATM Test Lab and other projects for automated testing of banking applications.',
  },
  {
    role: 'Associate Architect',
    company: 'FIS Global Business Solutions',
    period: '2013 — 2015',
    location: 'Noida, IN',
    summary:
      'Card management system integration with POS and Acquiring Switch. Several projects for Loyalty and Gift Card processing.',
  },
  {
    role: 'Principal Exe - Engineering',
    company: 'FIS Global Business Solutions',
    period: '2010 — 2013',
    location: 'Noida, IN',
    summary:
      'Prepaid Card management system built for ISTS Worldwide Inc.',
  },
  {
    role: 'Technical Lead',
    company: 'FIS Global Business Solutions',
    period: '2008 — 2010',
    location: 'Noida, IN',
    summary:
      'Lead a team of 10 engineers to deliver PDI Workforce for PDI.',
  },
  {
    role: 'Senior Software Engineer',
    company: 'FIS Global Business Solutions',
    period: '2007 — 2008',
    location: 'Noida, IN',
    summary:
      'Designed and built monitoring components for ISO 8583 switch. Inhouse projects integrated with SharePoint Portal Server 2007. Reporting and analytics using SSRS and SSAS.',
  },
  {
    role: 'Software Developer',
    company: 'COMM IT India Pvt Ltd.',
    period: '2005 — 2007',
    location: 'New Delhi, IN',
    summary:
      'Delivered Capex. Responsible for building POCs on latest Microsoft technologies for Microsoft business partners. Delivered projects for MTNL, PFC, PepsiCo India.',
  },
]

export const SERVICES: { title: string; description: string }[] = [
  {
    title: 'Product Design',
    description:
      'End-to-end product thinking — from messy first sketches to a polished, value added interface shipped at your premise or over cloud.',
  },
  {
    title: 'System Integration',
    description:
      'Token-driven, accessible libraries that scales out as you grow without losing their soul.',
  },
  {
    title: 'Full Stack Engineering',
    description:
      'Production (React || Angular && TypeScript) code that matches the design down to the core, with motional CI/CD pipelines.',
  },
  {
    title: 'Business Intelligence',
    description:
      'Data-driven insights and analytics that inform strategic decisions and drive business growth.',
  },
  {
    title: 'Security & Compliance',
    description:
      'Ensuring your digital products meet the highest standards of security and OWASP \u219110 compliance.',
  },
  {
    title: 'AI Integration',
    description:
      'Integrating AI capabilities into your products or development processes to enhance user experience and drive innovation.',
  },
]
