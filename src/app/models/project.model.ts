export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  category: 'Web' | 'Mobile' | 'AI/ML' | 'Open Source' | 'Game';
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
}