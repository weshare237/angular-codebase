import { Component } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  firstName: string = '';
  lastName: string = '';
  subject: string = '';
  isSubmitted: boolean = false;

  users: Array<any> = [];

  constructor(private service: MyFirstService) {
    this.users = this.service.getAllUsers();
    this.isSubmitted = this.users.length > 0;
  }

  handleSubmit(): void {
    this.service.insert({
      firstName: this.firstName,
      lastName: this.lastName,
      subject: this.subject,
    });
  }

  handleDelete(index: number): void {
    this.service.deleteUser(index);
  }
}
