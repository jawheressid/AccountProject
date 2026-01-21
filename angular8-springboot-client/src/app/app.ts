import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from './account-list/account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AccountListComponent, CreateAccountComponent, UpdateAccountComponent, AccountDetailsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular8-springboot-client');
  currentMode = signal<'add' | 'edit' | 'view' | 'none'>('none');
  selectedAccountId = signal<string>('');

  goToList() {
    this.currentMode.set('none');
  }

  goToAdd() {
    this.currentMode.set('add');
  }

  goToEdit(id: string) {
    this.selectedAccountId.set(id);
    this.currentMode.set('edit');
  }

  goToView(id: string) {
    this.selectedAccountId.set(id);
    this.currentMode.set('view');
  }

  onAccountAdded() {
    this.currentMode.set('none');
  }

  onAccountUpdated() {
    this.currentMode.set('none');
  }
}
