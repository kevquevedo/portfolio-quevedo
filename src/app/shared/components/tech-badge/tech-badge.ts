import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-badge',
  standalone: true,
  imports: [],
  template: `
    <span class="font-mono text-xs px-2 py-1 rounded
                 bg-white/5 border border-white/10 text-white/60
                 hover:border-accent-cyan/40 hover:text-accent-cyan
                 transition-all duration-300">
      {{ name }}
    </span>
  `,
  styles: []
})
export class TechBadgeComponent {
  @Input() name: string = '';
}