export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  category: 'Web' | 'Mobile' | 'AI/ML' | 'Open Source';
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
}