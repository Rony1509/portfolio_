import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  private themeService = inject(ThemeService);
  theme = this.themeService.theme;
  isMobileMenuOpen = signal(false);
  isScrolled = signal(false);

  navLinks = [
    { label: 'Home', path: '' },
    { label: 'About', path: 'about' },
    { label: 'Education', path: 'education' },
    { label: 'Achievements', path: 'achievements' },
    { label: 'Projects', path: 'projects' },
    { label: 'Contact', path: 'contact' }
  ];

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(val => !val);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
