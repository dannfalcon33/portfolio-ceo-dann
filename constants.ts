import { Project, SkillCategory, Resource, MediaItem, AiMediaItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Monolith",
    category: "Fullstack Architecture",
    image: "https://picsum.photos/800/600?grayscale&random=1",
    year: "2024",
    description: "A headless commerce solution built for scalability. Features a microservices architecture, real-time inventory management, and AI-driven product recommendations. Designed to handle high-traffic flagship launches with sub-second latency.",
    link: "https://example.com/project1"
  },
  {
    id: 2,
    title: "Fintech Dashboard",
    category: "React / Node.js",
    image: "https://picsum.photos/800/600?grayscale&random=2",
    year: "2023",
    description: "Real-time financial analytics platform visualizing complex market data. Implements WebSockets for live updates, D3.js for custom charting, and strict security protocols for sensitive user data.",
    link: "https://example.com/project2"
  },
  {
    id: 3,
    title: "AI Content Generator",
    category: "GenAI Integration",
    image: "https://picsum.photos/800/600?grayscale&random=3",
    year: "2023",
    description: "An editorial tool leveraging LLMs to assist content creators. Includes tone analysis, automated summarization, and a custom fine-tuned model for brand voice consistency.",
    link: "https://example.com/project3"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    skills: ["JavaScript", "TypeScript", "React", "Vanilla CSS", "Framer Motion", "GSAP"]
  },
  {
    title: "Backend Architecture",
    skills: ["Node.js", "Python", "PHP", "Django", "Laravel", "Next.js"]
  },
  {
    title: "Design & Direction",
    skills: ["Figma", "Prototyping with AI"]
  }
];

export const RESOURCES: Resource[] = [
  { title: "The Modern Stack Guide", type: "PDF Guide", link: "#" },
  { title: "React Performance Patterns", type: "Article", link: "#" },
  { title: "Clean Architecture for Frontend", type: "GitHub Repo", link: "#" }
];

export const MEDIA: MediaItem[] = [
  { title: "Building Scalable Systems", platform: "Tech Podcast", date: "OCT 2024" },
  { title: "The Future of Web Dev", platform: "Conference Talk", date: "AUG 2024" },
  { title: "Mastering TypeScript", platform: "YouTube Series", date: "JUN 2024" }
];

export const AI_MEDIA: AiMediaItem[] = [
  {
    id: 1,
    title: "Neural Dreams",
    type: "image",
    url: "https://picsum.photos/600/800?grayscale&random=10",
    description: "Midjourney v6 Exploration"
  },
  {
    id: 2,
    title: "Cyberpunk Noir",
    type: "image",
    url: "https://picsum.photos/600/800?grayscale&random=11",
    description: "Stable Diffusion XL"
  },
  {
    id: 3,
    title: "Abstract Kinetics",
    type: "video",
    url: "https://picsum.photos/600/800?grayscale&random=12",
    description: "Runway Gen-2 Animation"
  },
  {
    id: 4,
    title: "Synthetic Nature",
    type: "image",
    url: "https://picsum.photos/600/800?grayscale&random=13",
    description: "DALL-E 3 Composition"
  },
  {
    id: 5,
    title: "Digital Fluidity",
    type: "video",
    url: "https://picsum.photos/600/800?grayscale&random=14",
    description: "Pika Labs Render"
  }
];