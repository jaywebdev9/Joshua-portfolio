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
  coverImage?: string;
  gallery?: string[];
  featured: boolean;
  order: number;
}

export interface SiteSettings {
  siteName: string;
  tagline?: string;
  heroHeadline?: string;
  heroSubtext?: string;
  aboutBio?: string;
  aboutJourney?: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  twitter?: string;
  resumeUrl?: string;
  availability?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  order: number;
}
