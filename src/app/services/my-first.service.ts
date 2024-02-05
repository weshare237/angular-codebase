import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {
  users: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      firstName: 'FOPA',
      lastName: 'KUETE',
      subject: 'Computer Science',
    });

    this.insert({
      firstName: 'FOUWA',
      lastName: 'KUETE',
      subject: 'Physics',
    });
  }

  insert(user: { firstName: string; lastName: string; subject: string }): void {
    this.users.push(user);
  }

  getAllUsers(): Array<any> {
    return this.users;
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1);
  }
}
