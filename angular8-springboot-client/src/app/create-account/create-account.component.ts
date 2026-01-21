import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-account.component.html'
})
export class CreateAccountComponent {
  account: Account = new Account();
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private service: AccountService, private router: Router) {}

  save(): void {
    if (!this.account.firstName || !this.account.lastName || !this.account.cin) {
      this.errorMessage = 'Please fill in all required fields';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.service.createAccount(this.account).subscribe({
      next: (response) => {
        console.log('Account created successfully:', response);
        this.isLoading = false;
        // Navigate after successful creation
        setTimeout(() => {
          this.router.navigate(['/accounts']).then(() => {
            // Force reload of data
            window.location.href = 'http://localhost:4200/accounts';
          });
        }, 500);
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error creating account:', error);
        this.errorMessage = error?.error?.message || 'Error creating account. Please try again.';
      }
    });
  }
}
