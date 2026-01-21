import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-update-account',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-account.component.html'
})
export class UpdateAccountComponent implements OnInit {
  @Input() accountId!: string;
  @Output() accountUpdated = new EventEmitter<void>();

  account: Account = new Account();
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private service: AccountService) {}

  ngOnInit(): void {
    if (this.accountId) {
      this.service.getAccount(this.accountId).subscribe({
        next: (data) => {
          this.account = data;
        },
        error: (error) => {
          console.error('Error loading account:', error);
          this.errorMessage = 'Error loading account';
        }
      });
    }
  }

  update(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.service.updateAccount(this.accountId, this.account).subscribe({
      next: () => {
        console.log('Account updated successfully');
        this.isLoading = false;
        this.accountUpdated.emit();
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error updating account:', error);
        this.errorMessage = error?.error?.message || 'Error updating account';
      }
    });
  }
}
