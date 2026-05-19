import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent {
  type = input<'success' | 'error' | 'info'>('success');
  message = input<string>('');
  onClose = output<void>();

  close() {
    this.onClose.emit();
  }
}
