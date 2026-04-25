import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = 'service_i7m997m';
const TEMPLATE_ID = 'template_gen7r57';
const PUBLIC_KEY  = 'KBaftmsWsedP93PCk';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ScrollRevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  sent    = signal(false);
  loading = signal(false);
  error   = signal(false);

  form = this.fb.group({
    name:    ['', Validators.required],
    email:   ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  async onSubmit(): Promise<void> {
    if (this.form.invalid) return;

    this.loading.set(true);
    this.error.set(false);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  this.form.value.name,
          from_email: this.form.value.email,
          message:    this.form.value.message,
        },
        PUBLIC_KEY
      );
      this.sent.set(true);
    } catch (err) {
      console.error(err);
      this.error.set(true);
    } finally {
      this.loading.set(false);
    }
  }
}