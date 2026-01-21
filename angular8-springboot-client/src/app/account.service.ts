import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private baseUrl = 'http://localhost:8080/api/v1/accounts';

  constructor(private http: HttpClient) {}

  getAccountsList(): Observable<Account[]> {
    return this.http.get<Account[]>(this.baseUrl);
  }

  getAccount(id: string): Observable<Account> {
    return this.http.get<Account>(`${this.baseUrl}/${id}`);
  }

  createAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.baseUrl, account);
  }

  updateAccount(id: string, account: Account): Observable<Account> {
    return this.http.put<Account>(`${this.baseUrl}/${id}`, account);
  }

  deleteAccount(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
