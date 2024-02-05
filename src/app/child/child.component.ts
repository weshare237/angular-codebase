import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() childMessage: string | undefined;

  message = 'Child Component Injection';
  showText = false;

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(): void {
    this.messageEvent.emit('Hello from your son');
  }

  toggleText(): void {
    this.showText = !this.showText;
  }
}
