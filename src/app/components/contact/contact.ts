import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';

interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ScrollAnimateDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  private storageKey = 'portfolioContactMessages';
  
  isLoading = signal(false);
  submitSuccess = signal(false);
  savedMessages = signal<ContactMessage[]>([]);

  contactInfo = [
    { icon: 'mail', label: 'Email', value: 'bsse1509@gmail.com', link: 'mailto:bsse1509@gmail.com' },
    { icon: 'phone', label: 'Phone', value: '+880 1946159371', link: 'tel:+8801946159371' },
    { icon: 'location', label: 'Location', value: 'Dhaka, Bangladesh', link: '#' },
    { icon: 'linkedin', label: 'LinkedIn', value: 'https://www.linkedin.com/in/mdrony-rahman/', link: 'https://www.linkedin.com/in/mdrony-rahman/' }
  ];

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  getFieldError(fieldName: string): string {
    const field = this.form.get(fieldName);
    if (!field || !field.errors || !field.touched) {
      return '';
    }

    if (field.errors['required']) return `${fieldName} is required`;
    if (field.errors['minlength']) return `${fieldName} is too short`;
    if (field.errors['email']) return 'Please enter a valid email';
    return '';
  }

  ngOnInit() {
    this.loadSavedMessages();
  }

  private loadSavedMessages() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        this.savedMessages.set(JSON.parse(stored));
      }
    } catch {
      this.savedMessages.set([]);
    }
  }

  private saveMessage(message: ContactMessage) {
    const updated = [...this.savedMessages(), message];
    this.savedMessages.set(updated);
    localStorage.setItem(this.storageKey, JSON.stringify(updated));
  }

  clearSavedMessages() {
    this.savedMessages.set([]);
    localStorage.removeItem(this.storageKey);
  }

  onSubmit() {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key)?.markAsTouched();
      });
      return;
    }

    this.isLoading.set(true);

    const payload: ContactMessage = {
      name: this.form.value.name as string,
      email: this.form.value.email as string,
      subject: this.form.value.subject as string,
      message: this.form.value.message as string,
      submittedAt: new Date().toISOString()
    };

    setTimeout(() => {
      this.isLoading.set(false);
      this.submitSuccess.set(true);
      this.saveMessage(payload);
      this.form.reset();
      
      setTimeout(() => {
        this.submitSuccess.set(false);
      }, 4000);
    }, 1500);
  }
}
