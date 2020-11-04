import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  onLogin(Email: string, Password: string) {
    return this.http.post<AuthResponseData>('https://localhost:5001/api/login', {
      email: Email,
      password: Password,
    });
  }
}
