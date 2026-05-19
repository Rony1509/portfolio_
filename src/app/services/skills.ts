import { Injectable } from '@angular/core';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private technicalSkills: Skill[] = [
    { name: 'Python', category: 'Languages', icon: 'devicon-python-plain', level: 85 },
    { name: 'JavaScript', category: 'Languages', icon: 'devicon-javascript-plain', level: 80 },
    { name: 'TypeScript', category: 'Languages', icon: 'devicon-typescript-plain', level: 75 },
    { name: 'Java', category: 'Languages', icon: 'devicon-java-plain', level: 70 },
    { name: 'C++', category: 'Languages', icon: 'devicon-cplusplus-plain', level: 65 },
    { name: 'Angular', category: 'Frameworks', icon: 'devicon-angularjs-plain', level: 80 },
    { name: 'React', category: 'Frameworks', icon: 'devicon-react-original', level: 75 },
    { name: 'Node.js', category: 'Frameworks', icon: 'devicon-nodejs-plain', level: 70 },
    { name: 'Spring Boot', category: 'Frameworks', icon: 'devicon-spring-plain', level: 65 },
    { name: 'Git', category: 'Tools', icon: 'devicon-git-plain', level: 90 },
    { name: 'Docker', category: 'Tools', icon: 'devicon-docker-plain', level: 70 },
    { name: 'VS Code', category: 'Tools', icon: 'devicon-vscode-plain', level: 85 },
    { name: 'Postman', category: 'Tools', icon: 'devicon-postman-plain', level: 75 },
    { name: 'Figma', category: 'Tools', icon: 'devicon-figma-plain', level: 60 },
    { name: 'MySQL', category: 'Databases', icon: 'devicon-mysql-plain', level: 75 },
    { name: 'MongoDB', category: 'Databases', icon: 'devicon-mongodb-plain', level: 70 },
    { name: 'Firebase', category: 'Databases', icon: 'devicon-firebase-plain', level: 65 }
  ];

  private softSkills: string[] = [
    'Communication',
    'Teamwork',
    'Problem Solving',
    'Critical Thinking',
    'Time Management',
    'Adaptability'
  ];

  getTechnicalSkills(): Skill[] {
    return this.technicalSkills;
  }

  getSoftSkills(): string[] {
    return this.softSkills;
  }
}
