import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../services/projects';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  private projectsService = inject(ProjectsService);

  selectedFilter = signal<string>('All');
  projects = this.projectsService.getProjects();

  categories = ['All', 'Web', 'Mobile', 'AI/ML', 'Open Source', 'Game'];

  filteredProjects = computed(() => {
    const filter = this.selectedFilter();
    const allProjects = this.projects;
    
    if (filter === 'All') {
      return allProjects;
    }
    
    return allProjects.filter(p => p.category === filter);
  });

  setFilter(category: string) {
    this.selectedFilter.set(category);
  }
}
