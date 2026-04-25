import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal';
import { PortfolioService } from '../../core/services/portfolio';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  private portfolioService = inject(PortfolioService);

  skills = this.portfolioService.skills;

  categories = [
    { id: 'languages',  label: 'Lenguajes'   },
    { id: 'frameworks', label: 'Frameworks'  },
    { id: 'databases',  label: 'Bases de datos' },
    { id: 'devops',     label: 'DevOps'      },
  ];

  getSkillsByCategory(category: string) {
    return this.skills().filter(s => s.category === category);
  }
}