import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-list.component.html'
})
export class AccountListComponent implements OnInit, OnDestroy {
  @Output() editAccount = new EventEmitter<string>();
  @Output() viewAccount = new EventEmitter<string>();
  @Output() accountDeleted = new EventEmitter<void>();

  accounts: Account[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';
  private refreshSubscription: Subscription | null = null;

  constructor(private service: AccountService) {}

  ngOnInit(): void {
    this.reloadData();
    // Auto-refresh every 3 seconds
    this.refreshSubscription = interval(3000).subscribe(() => {
      this.reloadData();
    });
  }

  ngOnDestroy(): void {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  reloadData(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.service.getAccountsList().subscribe({
      next: (data) => {
        this.accounts = data;
        this.isLoading = false;
        console.log('Accounts loaded:', data);
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error loading accounts:', error);
        this.errorMessage = 'Error loading accounts';
      }
    });
  }

  onEdit(id: string): void {
    this.editAccount.emit(id);
  }

  onView(id: string): void {
    this.viewAccount.emit(id);
  }

  deleteAccount(id: string): void {
    if (confirm('Are you sure you want to delete this account?')) {
      this.service.deleteAccount(id).subscribe({
        next: () => {
          console.log('Account deleted successfully');
          this.reloadData();
          this.accountDeleted.emit();
        },
        error: (error) => {
          console.error('Error deleting account:', error);
          this.errorMessage = 'Error deleting account';
        }
      });
    }
  }
}
