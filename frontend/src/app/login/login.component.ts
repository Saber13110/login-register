import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword = false;
  show2FA = false;

  email = '';
  password = '';
  totpCode = '';

  constructor(private auth: AuthService) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  handleLogin(): void {
    if (!this.totpCode && !this.show2FA) {
      this.show2FA = true;
      alert("Veuillez entrer votre code d'authentification à deux facteurs");
      return;
    }
    this.auth.login({
      email: this.email,
      password: this.password,
      totpCode: this.totpCode || undefined
    }).subscribe({
      next: () => alert('Connexion réussie !'),
      error: () => alert('Erreur lors de la connexion')
    });
  }

  loginWithGoogle(): void {
    alert('Redirection vers Google...');
  }
}
