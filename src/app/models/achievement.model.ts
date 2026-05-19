export interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  certificateUrl?: string;
  type: 'Certification' | 'Award';
}