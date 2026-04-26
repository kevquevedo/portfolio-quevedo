import { Injectable, signal } from '@angular/core';
import { Project, Skill } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  projects = signal<Project[]>([
    {
      id: 1,
      title: 'Portfolio Personal',
      description: 'Portfolio profesional desarrollado con Angular 21 y Tailwind CSS. Diseño futurista con glassmorphism, animaciones CSS, formulario de contacto funcional con EmailJS y deploy en Firebase.',
      tech: ['Angular', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      category: 'fullstack',
      githubUrl: 'https://github.com/kevquevedo/portfolio-quevedo',
      liveUrl: 'https://portfolio-quevedo.web.app',
      featured: true,
    },
    {
      id: 2,
      title: 'Voisdesigns',
      description: 'Sitio web para una carpintería de muebles a medida. Desarrollado con Angular y SCSS, con diseño elegante orientado a mostrar servicios y productos artesanales.',
      tech: ['Angular', 'TypeScript', 'SCSS', 'Vercel'],
      category: 'frontend',
      githubUrl: 'https://github.com/kevquevedo/voisdesigns',
      liveUrl: 'https://voisdesigns.vercel.app',
      featured: true,
    },
    {
      id: 3,
      title: 'El Buen Comer',
      description: 'App móvil para gestión integral de restaurantes. Administración de pedidos, mesas, empleados y menú con perfiles diferenciados por rol — cliente, empleado y dueño.',
      tech: ['Ionic', 'Angular', 'Firebase', 'TypeScript'],
      category: 'fullstack',
      githubUrl: 'https://github.com/kevquevedo/ElBuenComer',
      featured: true,
    },
    {
      id: 4,
      title: 'Clínica Quevedo',
      description: 'Sistema web para gestión de clínica médica. Turnos online, perfiles de paciente, especialista y administrador, verificación de email y deploy en producción.',
      tech: ['Angular', 'TypeScript', 'Firebase', 'HTML / CSS'],
      category: 'fullstack',
      githubUrl: 'https://github.com/kevquevedo/Clinica-Quevedo',
      liveUrl: 'https://clinica-quevedo.web.app/home',
      featured: true,
    },
    {
      id: 5,
      title: 'Sala de Juegos',
      description: 'Aplicación web con múltiples juegos interactivos. Desarrollada con Angular y Firebase, incluye autenticación de usuarios y registro de puntuaciones.',
      tech: ['Angular', 'TypeScript', 'Firebase', 'HTML / CSS'],
      category: 'fullstack',
      githubUrl: 'https://github.com/kevquevedo/Quevedo-Juegos',
      featured: false,
    },
  ]);

  skills = signal<Skill[]>([
    // Mainframe
    { name: 'COBOL Batch',      level: 95, category: 'mainframe' },
    { name: 'JCL',              level: 90, category: 'mainframe' },
    { name: 'zScope/ISPF',      level: 90, category: 'mainframe' },
    { name: 'IBM File Manager', level: 90, category: 'mainframe' },
    { name: 'Control-M',        level: 85, category: 'mainframe' },
    { name: 'BMC Remedy',       level: 80, category: 'mainframe' },
    { name: 'COBOL CICS',       level: 80, category: 'mainframe' },
    { name: 'DB2',              level: 75, category: 'mainframe' },

    // Lenguajes
    { name: 'JavaScript',  level: 75, category: 'languages' },
    { name: 'TypeScript',  level: 75, category: 'languages' },
    { name: 'Python',      level: 50, category: 'languages' },

    // Frontend
    { name: 'Angular',      level: 75, category: 'frameworks' },
    { name: 'HTML / CSS',   level: 80, category: 'frameworks' },
    { name: 'Tailwind CSS', level: 80, category: 'frameworks' },
    { name: 'Ionic',        level: 55, category: 'frameworks' },

    // Bases de datos
    { name: 'Teradata', level: 80, category: 'databases' },
    { name: 'MySQL',    level: 60, category: 'databases' },

    // Herramientas
    { name: 'JIRA',     level: 85, category: 'tools' },
    { name: 'GitHub',   level: 75, category: 'tools' },
    { name: 'Firebase', level: 70, category: 'tools' },

  ]);
}