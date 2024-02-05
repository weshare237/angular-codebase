import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  @Input() user: any = {};
  @Input() index: number = -1;
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter<number>();

  handleDelete(): void {
    this.deleteEvent.emit(this.index);
  }
}
