import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  stats = [
    { label: '10+', description: 'Projects Completed' },
    { label: '2', description: 'Years Coding' },
    { label: '5', description: 'Certifications' },
    { label: '100%', description: 'Dedication' }
  ];
}
