import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glass-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="glass-card p-6 h-full"
      [class.cursor-pointer]="clickable"
    >
      <ng-content />
    </div>
  `,
  styles: []
})
export class GlassCardComponent {
  @Input() clickable = false;
}