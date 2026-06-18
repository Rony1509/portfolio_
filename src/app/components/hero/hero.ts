import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit, OnDestroy {
  displayText = signal('');
  typingTexts = [
    'Software Engineer',
    'Full Stack Developer',
    'Angular Specialist',
    'Open Source Contributor',
    'Problem Solver'
  ];
  currentTextIndex = signal(0);
  currentCharIndex = signal(0);
  private timeoutId: any;

  socialLinks = [
    { icon: 'github', url: 'https://github.com/Rony1509', label: 'GitHub' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/mdrony-rahman/', label: 'LinkedIn' },
    { icon: 'twitter', url: 'https://x.com/MdRony16014', label: 'Twitter' },
    { icon: 'mail', url: 'mailto:bsse1509@gmail.com', label: 'Email' }
  ];

  ngOnInit() {
    this.startTyping();
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutId);
  }

  private startTyping() {
    const text = this.typingTexts[this.currentTextIndex()];
    if (this.currentCharIndex() < text.length) {
      this.displayText.update(current => current + text[this.currentCharIndex()]);
      this.currentCharIndex.update(i => i + 1);
      this.timeoutId = setTimeout(() => this.startTyping(), 60);
    } else {
      this.timeoutId = setTimeout(() => this.eraseText(), 2200);
    }
  }

  private eraseText() {
    if (this.currentCharIndex() > 0) {
      this.displayText.update(current => current.slice(0, -1));
      this.currentCharIndex.update(i => i - 1);
      this.timeoutId = setTimeout(() => this.eraseText(), 28);
    } else {
      this.currentTextIndex.update(i => (i + 1) % this.typingTexts.length);
      this.timeoutId = setTimeout(() => this.startTyping(), 400);
    }
  }

  scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
