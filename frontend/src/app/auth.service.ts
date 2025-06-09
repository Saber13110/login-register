import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string; totpCode?: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  register(data: { email: string; password: string; firstName: string; lastName: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }
}
