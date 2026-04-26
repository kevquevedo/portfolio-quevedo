import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal';
import { GlassCardComponent } from '../../shared/components/glass-card/glass-card';
import { TechBadgeComponent } from '../../shared/components/tech-badge/tech-badge';
import { PortfolioService } from '../../core/services/portfolio';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, GlassCardComponent, TechBadgeComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  private portfolioService = inject(PortfolioService);

  categories = ['todos', 'fullstack', 'frontend'];
  activeFilter = signal('todos');

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    const projects = this.portfolioService.projects();
    if (filter === 'todos') return projects;
    return projects.filter(p => p.category === filter);
  });

  setFilter(cat: string): void {
    this.activeFilter.set(cat);
  }
}