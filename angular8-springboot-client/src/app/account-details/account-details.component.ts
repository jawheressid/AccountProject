import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-account-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-details.component.html'
})
export class AccountDetailsComponent implements OnInit {
  @Input() accountId!: string;
  @Output() editAccount = new EventEmitter<string>();
  @Output() backToList = new EventEmitter<void>();

  account!: Account;
  isLoading: boolean = true;

  constructor(private service: AccountService) {}

  ngOnInit(): void {
    if (this.accountId) {
      this.service.getAccount(this.accountId).subscribe({
        next: (data) => {
          this.account = data;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        }
      });
    }
  }

  update(): void {
    this.editAccount.emit(this.accountId);
  }

  back(): void {
    this.backToList.emit();
  }
}
