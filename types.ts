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
  type: 'image' | 'video';
  url: string;
  description: string;
}