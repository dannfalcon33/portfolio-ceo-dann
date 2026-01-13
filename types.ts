export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
  description?: string;
  link?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Resource {
  title: string;
  type: string;
  link: string;
}

export interface MediaItem {
  title: string;
  platform: string;
  date: string;
}

export interface AiMediaItem {
  id: number;
  title: string;
  type: "image" | "video";
  url: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface HeroContent {
  badge: string;
  title: {
    first: string;
    highlight: string;
    last: string;
  };
  subtitle: string;
  backgroundElements: {
    circle1: boolean;
    circle2: boolean;
  };
}

export interface AboutContent {
  badge: string;
  title: {
    main: string;
    highlight: string;
  };
  description: string;
  expandedBio: {
    badge: string;
    title: string;
    paragraphs: string[];
    quote: string;
    est: string;
  };
  buttons: {
    readBio: string;
    downloadCv: string;
  };
  image: {
    sidebar: string;
    modal: string;
  };
}

export interface ContactContent {
  badge: string;
  title: {
    main: string;
    highlight: string;
  };
  description: string;
  email: {
    label: string;
    address: string;
  };
  form: {
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitButton: {
      idle: string;
      sending: string;
      success: string;
    };
  };
}

export interface PortfolioContent {
  sectionTitle: string;
  scrollHint: string;
  viewProject: string;
  viewArchive: string;
  modal: {
    viewLive: string;
    defaultDescription: string;
  };
}

export interface SkillsContent {
  sectionTitle: string;
  sectionNumber: string;
}

export interface FooterContent {
  name: string;
  copyright: string;
  socialLinks: SocialLink[];
}
