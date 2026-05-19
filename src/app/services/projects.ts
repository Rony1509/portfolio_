import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'AI Study Buddy',
      description: 'An AI-powered study assistant that helps students organize notes and generate quizzes.',
      techStack: ['Python', 'TensorFlow', 'React', 'Node.js'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/johndoe/ai-study-buddy',
      liveUrl: 'https://ai-study-buddy.com',
      imageUrl: '/assets/projects/ai-study-buddy.jpg'
    },
    {
      id: 2,
      title: 'Campus Event Manager',
      description: 'A web app for managing university events, with real-time notifications and RSVP system.',
      techStack: ['Angular', 'Firebase', 'TypeScript'],
      category: 'Web',
      githubUrl: 'https://github.com/johndoe/campus-event-manager',
      liveUrl: 'https://campus-events.com',
      imageUrl: '/assets/projects/campus-event-manager.jpg'
    },
    {
      id: 3,
      title: 'Code Review Bot',
      description: 'A GitHub bot that automates code review processes and provides feedback.',
      techStack: ['JavaScript', 'GitHub API', 'Node.js'],
      category: 'Open Source',
      githubUrl: 'https://github.com/johndoe/code-review-bot',
      imageUrl: '/assets/projects/code-review-bot.jpg'
    },
    {
      id: 4,
      title: 'Mobile Task Tracker',
      description: 'A cross-platform mobile app for tracking daily tasks and productivity.',
      techStack: ['React Native', 'Firebase', 'Expo'],
      category: 'Mobile',
      githubUrl: 'https://github.com/johndoe/mobile-task-tracker',
      liveUrl: 'https://tasktracker.app',
      imageUrl: '/assets/projects/mobile-task-tracker.jpg'
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectsByCategory(category: string): Project[] {
    if (category === 'All') return this.projects;
    return this.projects.filter(p => p.category === category);
  }
}
