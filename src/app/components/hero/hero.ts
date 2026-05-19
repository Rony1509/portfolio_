import { Component, ChangeDetectionStrategy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit {
  displayText = signal('');
  typingTexts = [
    'Software Engineering Student',
    'Full Stack Developer',
    'Open Source Enthusiast',
    'Problem Solver'
  ];
  currentTextIndex = signal(0);
  currentCharIndex = signal(0);
  isTyping = signal(true);

  socialLinks = [
    { icon: 'github', url: 'https://github.com/Rony1509', label: 'GitHub' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/mdrony-rahman/', label: 'LinkedIn' },
    { icon: 'twitter', url: 'https://x.com/MdRony16014', label: 'Twitter' },
    { icon: 'mail', url: 'mailto:bsse1509@gmail.com', label: 'Email' }
  ];

  ngOnInit() {
    this.startTyping();
  }

  private startTyping() {
    const text = this.typingTexts[this.currentTextIndex()];
    
    if (this.currentCharIndex() < text.length) {
      const nextChar = text[this.currentCharIndex()];
      this.displayText.update(current => current + nextChar);
      this.currentCharIndex.update(i => i + 1);
      setTimeout(() => this.startTyping(), 50);
    } else {
      setTimeout(() => this.eraseText(), 2000);
    }
  }

  private eraseText() {
    if (this.currentCharIndex() > 0) {
      this.displayText.update(current => current.slice(0, -1));
      this.currentCharIndex.update(i => i - 1);
      setTimeout(() => this.eraseText(), 30);
    } else {
      this.currentTextIndex.update(i => (i + 1) % this.typingTexts.length);
      setTimeout(() => this.startTyping(), 500);
    }
  }

  scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  }
}
