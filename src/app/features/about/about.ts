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
    { value: '9+'      , label: 'Años de experiencia' },
    { value: 'Prisma'  , label: 'Empresa actual'      },
    { value: 'COBOL'   , label: 'Especialidad'        },
  ];
}