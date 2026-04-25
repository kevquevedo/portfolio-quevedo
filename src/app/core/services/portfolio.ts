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
    { name: 'Node.js',     level: 90, category: 'frameworks' },
    { name: 'PostgreSQL',  level: 85, category: 'databases'  },
    { name: 'Docker',      level: 80, category: 'devops'     },
    { name: 'TypeScript',  level: 85, category: 'languages'  },
    { name: 'Python',      level: 75, category: 'languages'  },
    { name: 'Redis',       level: 70, category: 'databases'  },
    { name: 'Kubernetes',  level: 65, category: 'devops'     },
    { name: 'Go',          level: 60, category: 'languages'  },
  ]);
}