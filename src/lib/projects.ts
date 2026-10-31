export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  status: string;
  shortDesc: string;
  problem?: string;
  solution?: string;
  role?: string;
  techStack: string[];
  features?: string[];
  results?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "RetailOS",
    slug: "retailos",
    category: "Business System",
    status: "Live",
    shortDesc: "A complete inventory and sales management system built for retail shops — tracking stock, sales, debts, suppliers and reports in real time.",
    problem: "Many small retail businesses still rely on notebooks or basic spreadsheets, leading to stockouts, unclear debts and no real view of daily performance.",
    solution: "A full web system with POS, product management, stock alerts, customer & supplier tracking, expenses and clear dashboards.",
    role: "Full-Stack Developer — architecture, frontend and core business logic.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind"],
    features: ["Point of Sale", "Stock tracking & alerts", "Sales & expenses", "Supplier management", "Reports & charts"],
    results: "Built for real retail operations. Demo available on request.",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "2",
    title: "Fresh Studios",
    slug: "fresh-studios",
    category: "Website",
    status: "Live",
    shortDesc: "A cinematic photography and videography studio website focused on strong visuals, clear packages and easy booking.",
    problem: "The studio needed a professional online presence that showcases work and makes it easy for clients to book.",
    solution: "A dark, visual-first website with packages, gallery and direct WhatsApp / booking CTAs.",
    role: "Frontend Developer & Designer",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: ["Cinematic design", "Service packages", "Gallery", "Booking CTAs"],
    liveUrl: "#",
    featured: true,
  },
  {
    id: "3",
    title: "Loleza Ridge Lodge",
    slug: "loleza-ridge-lodge",
    category: "Website",
    status: "Live",
    shortDesc: "An elegant lodge website for a 10-room property in the Southern Highlands of Mbeya, with multi-language support.",
    problem: "The lodge needed a site that communicates the peaceful highland experience and simplifies room booking.",
    solution: "A warm, photography-focused website with room details, experiences and multi-language support (SW/EN/FR).",
    role: "Frontend Developer",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: ["Multi-language", "Room showcase", "Experiences", "Booking buttons"],
    liveUrl: "#",
    featured: true,
  },
  {
    id: "4",
    title: "Bio Page",
    slug: "bio-page",
    category: "Website",
    status: "Live",
    shortDesc: "A clean personal link-in-bio page that centralizes portfolio, GitHub, social links and availability.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: ["Link-in-bio", "Availability status", "Social links"],
    liveUrl: "#",
    featured: false,
  },
];
