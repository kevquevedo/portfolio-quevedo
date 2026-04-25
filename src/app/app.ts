import { Component } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { HeroComponent } from './features/hero/hero';
import { AboutComponent } from './features/about/about';
import { ProjectsComponent } from './features/projects/projects';
import { SkillsComponent } from './features/skills/skills';
import { ContactComponent } from './features/contact/contact';
import { FooterComponent } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-projects />
      <app-skills />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class AppComponent {}
