export type ProjectStatus = "Live" | "Prototype" | "In Development";

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  status: ProjectStatus;
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
    shortDesc:
      "Inventory and sales management system for retail businesses. Track stock, sales, debts, suppliers and generate reports in real time.",
    problem:
      "Many small and medium retail shops still manage stock and sales with notebooks or basic Excel. This leads to stockouts, unknown debts, and no clear view of daily profit.",
    solution:
      "A full web-based system with Point of Sale, product management, stock alerts, customer & supplier tracking, expense recording, and clear dashboards for sales and inventory trends.",
    role: "Full-Stack Developer — data model, frontend dashboard, and core business logic.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    features: [
      "Point of Sale (POS)",
      "Real-time stock tracking & low-stock alerts",
      "Sales, purchases & expenses",
      "Customer & supplier management",
      "Monthly revenue & inventory charts",
      "Multi-language support (SW/EN)",
    ],
    results: "Designed for real retail operations. Demo available.",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "2",
    title: "Fresh Studios",
    slug: "fresh-studios",
    category: "Website",
    status: "Live",
    shortDesc:
      "Modern photography and videography studio website with booking flow, packages and strong visual identity.",
    problem:
      "The studio needed a professional online presence that clearly shows services, past work and makes booking easy.",
    solution:
      "A dark, cinematic website focused on high-quality visuals, clear service packages, testimonials and direct WhatsApp / booking CTAs.",
    role: "Frontend Developer & Designer",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    features: [
      "Cinematic dark design",
      "Service packages",
      "Gallery & showreel",
      "Direct booking / WhatsApp CTA",
      "Mobile-first experience",
    ],
    liveUrl: "#",
    featured: true,
  },
  {
    id: "3",
    title: "Loleza Ridge Lodge",
    slug: "loleza-ridge-lodge",
    category: "Website",
    status: "Live",
    shortDesc:
      "Elegant lodge website for a 10-room property in the Southern Highlands of Mbeya, Tanzania.",
    problem:
      "The lodge needed a beautiful website that communicates the peaceful highland experience and makes room booking simple.",
    solution:
      "A warm, high-end website with strong photography, clear room information, multi-language support (SW/EN/FR) and direct booking CTAs.",
    role: "Frontend Developer",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    features: [
      "Multi-language (SW / EN / FR)",
      "Room showcase",
      "Experiences & gallery",
      "Direct booking buttons",
      "Photography-focused design",
    ],
    liveUrl: "#",
    featured: true,
  },
  {
    id: "4",
    title: "Personal Bio Page",
    slug: "bio-page",
    category: "Website",
    status: "Live",
    shortDesc:
      "Clean personal link-in-bio page that centralizes portfolio, GitHub, social links and freelance availability.",
    problem:
      "Needed a single professional place to share portfolio, GitHub, Fiverr and socials — especially for Instagram and WhatsApp.",
    solution:
      "A minimal, fast bio page with clear hierarchy, availability status and direct links to the most important destinations.",
    role: "Designer & Developer",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: ["Clean link-in-bio layout", "Availability status", "Social + professional links", "Fast loading"],
    liveUrl: "#",
    featured: false,
  },
];
