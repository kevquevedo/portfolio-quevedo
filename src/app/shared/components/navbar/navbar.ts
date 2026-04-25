import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styles: []
})
export class NavbarComponent {
  scrolled = signal(false);
  activeSection = signal('hero');

  navItems = [
    { id: 'hero',     label: 'Inicio',    href: '#hero'     },
    { id: 'about',    label: 'Sobre mí',  href: '#about'    },
    { id: 'projects', label: 'Proyectos', href: '#projects' },
    { id: 'skills',   label: 'Skills',    href: '#skills'   },
    { id: 'contact',  label: 'Contacto',  href: '#contact'  },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 50);
  }
}