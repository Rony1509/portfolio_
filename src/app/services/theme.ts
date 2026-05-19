import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeSignal = signal<'light' | 'dark'>('light');

  constructor() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      this.themeSignal.set('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }

  get theme() {
    return this.themeSignal.asReadonly();
  }

  toggleTheme() {
    const newTheme = this.themeSignal() === 'light' ? 'dark' : 'light';
    this.themeSignal.set(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }
}
