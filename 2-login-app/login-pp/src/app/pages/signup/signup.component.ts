import { Component, Input } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { InputComponent } from "../../components/input/input.component";
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface SignupForm {
  username: FormControl,
  password: FormControl,
  email: FormControl,
  passwordConfirm: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLoginLayoutComponent, ReactiveFormsModule, InputComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  providers: [LoginService]
})
export class SignupComponent {
  signupForm: FormGroup<SignupForm>

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {
    this.signupForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit() {
    this.loginService.login(
      this.signupForm.value.email || '',
      this.signupForm.value.password || ''
    ).subscribe({
      next: () => this.toastService.success('Login successful', 'Success'),
      error: (err) => this.toastService.error('Login failed', 'Error'),
    })
  }

  navigate() {
    console.log('Navigate to another page');
    this.router.navigate(["/login"]);
  }
}
