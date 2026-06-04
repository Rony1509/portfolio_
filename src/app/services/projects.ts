import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Mini Chess',
      description: 'A fully functional chess game built with clean logic and interactive UI.',
      techStack: ['JavaScript', 'HTML', 'CSS','TypeScript'],
      category: 'Game',
      githubUrl: 'https://github.com/Rony1509/mini-chess',
      liveUrl: 'https://rony1509.github.io/mini-chess/',
      imageUrl: '/assets/projects/mini-chess.jpg'
    },
    {
      id: 2,
      title: 'Github User Search',
      description: 'GitHub User Search is a modern Angular application that enables users to search for GitHub profiles in real time using the GitHub REST API.',
      techStack: ['Angular', 'GitHub API', 'TypeScript'],
      category: 'Web',
      githubUrl: 'https://github.com/Rony1509/GithubUserSearch',
      liveUrl: 'https://github-user-search-ebon-sigma.vercel.app/',
      imageUrl: ''
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
