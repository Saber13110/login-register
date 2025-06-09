import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string; totpCode?: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  register(data: { email: string; password: string; firstName: string; lastName: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
}
