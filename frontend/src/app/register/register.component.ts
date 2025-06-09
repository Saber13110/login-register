import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  step = 1;
  showPassword = false;
  showConfirm = false;

  formData = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  acceptTerms: false
  };

  constructor(private authService: AuthService) {}

  toggle(field: 'password' | 'confirmPassword'): void {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else {
      this.showConfirm = !this.showConfirm;
    }
  }

  goToStep(step: number): void {
    this.step = step;
  }

  handleStep1(): void {
    if (this.formData.password !== this.formData.confirmPassword) {
      alert('Les mots de passe sont différents');
      return;
    }
    this.goToStep(2);
  }

  handleStep2(): void {
    if (!this.formData.acceptTerms) {
      alert("Vous devez accepter les conditions d'utilisation");
      return;
    }
    this.authService
      .register({
        email: this.formData.email,
        password: this.formData.password,
        firstName: this.formData.firstName,
        lastName: this.formData.lastName
      })
      .subscribe({
        next: () => {
          alert('Compte créé avec succès !');
          this.goToStep(1);
        },
        error: () => alert("Erreur lors de l'inscription")
      });
  }
}
