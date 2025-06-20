import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { RegisterComponent } from './register.component';
import { AuthService } from '../auth.service';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['register']);
    authServiceSpy.register.and.returnValue(of({}));

    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [FormsModule],
      providers: [{ provide: AuthService, useValue: authServiceSpy }]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle password field', () => {
    expect(component.showPassword).toBeFalse();
    component.toggle('password');
    expect(component.showPassword).toBeTrue();
  });

  it('should toggle confirm password field', () => {
    expect(component.showConfirm).toBeFalse();
    component.toggle('confirmPassword');
    expect(component.showConfirm).toBeTrue();
  });

  it('should stay on step 1 when passwords do not match', () => {
    spyOn(window, 'alert');
    component.formData.password = 'a';
    component.formData.confirmPassword = 'b';
    component.handleStep1();
    expect(window.alert).toHaveBeenCalled();
    expect(component.step).toBe(1);
  });

  it('should proceed to step 2 when passwords match', () => {
    component.formData.password = 'a';
    component.formData.confirmPassword = 'a';
    component.handleStep1();
    expect(component.step).toBe(2);
  });

  it('should require terms acceptance', () => {
    spyOn(window, 'alert');
    component.formData.acceptTerms = false;
    component.handleStep2();
    expect(window.alert).toHaveBeenCalled();
    expect(authServiceSpy.register).not.toHaveBeenCalled();
  });

  it('should reset after successful registration', () => {
    component.step = 2;
    component.formData.acceptTerms = true;
    component.handleStep2();
    expect(authServiceSpy.register).toHaveBeenCalled();
    expect(component.step).toBe(1);
  });
});
