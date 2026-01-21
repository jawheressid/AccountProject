import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Account {
  id!: string;
  firstName!: string;
  lastName!: string;
  cin!: string;
  accountNumber!: string;
  agency!: string;
  amount!: number;
}
