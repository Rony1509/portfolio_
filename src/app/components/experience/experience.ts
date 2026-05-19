import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  type: 'Internship' | 'Part-time' | 'Freelance';
  responsibilities: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  experiences: ExperienceItem[] = [
    {
      id: 1,
      company: 'TechCorp Inc.',
      position: 'Full Stack Developer Intern',
      duration: 'Jun 2023 - Aug 2023',
      type: 'Internship',
      responsibilities: [
        'Developed and maintained web applications using Angular and Node.js',
        'Collaborated with cross-functional teams to deliver features on time',
        'Improved API performance by 30% through optimization',
        'Participated in code reviews and contributed to documentation'
      ]
    },
    {
      id: 2,
      company: 'StartupHub',
      position: 'Frontend Developer',
      duration: 'Sep 2023 - Present',
      type: 'Part-time',
      responsibilities: [
        'Built responsive UI components using Angular and SCSS',
        'Implemented complex state management with RxJS',
        'Mentored junior developers on best practices',
        'Reduced bundle size by 40% through code optimization'
      ]
    },
    {
      id: 3,
      company: 'Freelance Projects',
      position: 'Web Developer',
      duration: 'Mar 2022 - Present',
      type: 'Freelance',
      responsibilities: [
        'Designed and developed custom websites for clients',
        'Managed projects from conception to deployment',
        'Ensured 99.9% uptime for deployed applications',
        'Provided ongoing support and maintenance'
      ]
    }
  ];
}
