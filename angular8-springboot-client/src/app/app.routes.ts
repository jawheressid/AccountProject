import { Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

export const routes: Routes = [
  { path: 'accounts', component: AccountListComponent },
  { path: 'add', component: CreateAccountComponent },
  { path: 'update/:id', component: UpdateAccountComponent },
  { path: 'details/:id', component: AccountDetailsComponent },
  { path: '', redirectTo: 'accounts', pathMatch: 'full' },
  { path: '**', redirectTo: 'accounts' }
];
