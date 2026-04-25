import { Injectable, signal } from '@angular/core';
import { Project, Skill } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  projects = signal<Project[]>([
    {
      id: 1,
      title: 'API Gateway Distribuida',
      description: 'Gateway con rate limiting, auth JWT y circuit breaker. Maneja 10K req/s.',
      tech: ['Go', 'Redis', 'Docker', 'Nginx'],
      category: 'backend',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Pipeline de Datos Real-time',
      description: 'Ingesta y procesamiento de eventos con Kafka y almacenamiento en ClickHouse.',
      tech: ['Kafka', 'Python', 'ClickHouse', 'Grafana'],
      category: 'devops',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Microservicios E-commerce',
      description: 'Arquitectura de microservicios con service mesh, observabilidad y CI/CD.',
      tech: ['Node.js', 'gRPC', 'PostgreSQL', 'K8s'],
      category: 'fullstack',
      githubUrl: '#',
      liveUrl: '#',
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