import { Component, Input } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { InputComponent } from "../../components/input/input.component";
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLoginLayoutComponent, ReactiveFormsModule, InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [LoginService]
})
export class LoginComponent {
  loginForm: FormGroup<LoginForm>

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit() {
    this.loginService.login(
      this.loginForm.value.email || '',
      this.loginForm.value.password || ''
    ).subscribe({
      next: () => console.log('Login successful'),
      error: (err) => console.error('Login failed', err)
    })
  }

  navigate() {
    console.log('Navigate to another page');
    this.router.navigate(["/signup"]);
  }
}
