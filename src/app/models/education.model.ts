export interface Education {
  id: number;
  degree: string;
  institution: string;
  yearRange: string;
  gpa?: string;
  highlights: string[];
  description: string;
  logoUrl?: string;
}