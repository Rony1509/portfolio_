import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';
import { Achievement } from '../../models/achievement.model';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './achievements.html',
  styleUrl: './achievements.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AchievementsComponent {
  selectedFilter = signal<'Certification' | 'Award'>('Certification');

  achievements: Achievement[] = [
    {
      id: 1,
      title: 'Google Cloud Associate Cloud Engineer',
      organization: 'Google Cloud',
      date: '2024',
      description: 'Certified in cloud infrastructure deployment and management.',
      type: 'Certification',
      certificateUrl: '#'
    },
    {
      id: 2,
      title: 'AWS Certified Cloud Practitioner',
      organization: 'Amazon Web Services',
      date: '2023',
      description: 'Foundational certification in AWS cloud services.',
      type: 'Certification',
      certificateUrl: '#'
    },
    {
      id: 3,
      title: 'Hackathon Winner 2024',
      organization: 'TechFest 2024',
      date: '2024',
      description: '1st place in full-stack web application competition.',
      type: 'Award',
      certificateUrl: '#'
    },
    {
      id: 4,
      title: "Dean's List",
      organization: 'State University',
      date: '2023-2024',
      description: 'Recognized for outstanding academic achievement.',
      type: 'Award',
      certificateUrl: '#'
    },
    {
      id: 5,
      title: 'Angular Advanced Certification',
      organization: 'Udemy',
      date: '2024',
      description: 'Advanced Angular development and architecture.',
      type: 'Certification',
      certificateUrl: '#'
    }
  ];

  filteredAchievements = computed(() =>
    this.achievements.filter(a => a.type === this.selectedFilter())
  );

  setFilter(type: 'Certification' | 'Award') {
    this.selectedFilter.set(type);
  }
}
