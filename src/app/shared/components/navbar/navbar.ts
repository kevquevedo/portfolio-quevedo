import { Component, HostListener, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  scrolled      = signal(false);
  activeSection = signal('hero');

  private observer!: IntersectionObserver;

  navItems = [
    { id: 'hero',     label: 'Inicio',    href: '#hero'     },
    { id: 'about',    label: 'Sobre mí',  href: '#about'    },
    { id: 'projects', label: 'Proyectos', href: '#projects' },
    { id: 'skills',   label: 'Skills',    href: '#skills'   },
    { id: 'contact',  label: 'Contacto',  href: '#contact'  },
  ];

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-80px 0px -50% 0px'
      }
    );

    // Observar cada sección
    const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 50);
  }
}