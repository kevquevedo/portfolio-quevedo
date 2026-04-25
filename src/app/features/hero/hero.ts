import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})

export class HeroComponent implements OnInit {

  private taglines = [
    'Analista Programador.',
    'COBOL Mainframe.',
    'Angular.',
    'Tailwind CSS.',
  ];

  currentTagline = signal(this.taglines[0]);
  private index = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.index = (this.index + 1) % this.taglines.length;
      this.currentTagline.set(this.taglines[this.index]);
    }, 3000);
  }

  private animClasses = ['particle-a', 'particle-b', 'particle-c'];

  particles = Array.from({ length: 1300 }, (_, i) => ({
  id:        i,
  size:      Math.random() * 3 + 1,
  x:         Math.random() * 100,
  y:         Math.random() * 100,
  opacity:   Math.random() * 0.15 + 0.05,
  duration:  (Math.random() * 8 + 4).toFixed(1) + 's',
  delay:     (Math.random() * 5).toFixed(1) + 's',
  animClass: this.animClasses[Math.floor(Math.random() * this.animClasses.length)],
  }));
  
}
