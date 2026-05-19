export interface Skill {
  name: string;
  category: 'Languages' | 'Frameworks' | 'Tools' | 'Databases';
  icon: string;
  level: number;
}