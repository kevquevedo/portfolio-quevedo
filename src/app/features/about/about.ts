import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  stats = [
    { value: '3+',  label: 'Años de experiencia' },
    { value: '20+', label: 'Proyectos completados' },
    { value: '10+', label: 'Tecnologías dominadas' },
  ];
}