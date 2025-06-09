import { Component } from '@angular/core';

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

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  handleLogin(): void {
    if (!this.totpCode && !this.show2FA) {
      this.show2FA = true;
      alert("Veuillez entrer votre code d'authentification à deux facteurs");
      return;
    }
    console.log({ email: this.email, password: this.password, totpCode: this.totpCode });
    alert('Connexion réussie !');
  }

  loginWithGoogle(): void {
    alert('Redirection vers Google...');
  }
}
