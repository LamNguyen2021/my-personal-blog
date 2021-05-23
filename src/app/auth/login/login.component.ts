import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  constructor(private auth: AuthService, private router: Router) {}

  handleLogin(loginForm: any) {
    // nếu form chưa được nhập hoặc nhập không đúng thì không xử lý
    if (loginForm.invalid) {
      return;
    }

    this.auth.login(loginForm.value).subscribe({
      next: (result) => {
        if (result.username === 'admin') {
          this.router.navigateByUrl('/');
        }
      },
    });

    // this.auth.login(this.loginForm.value).subscribe({
    //   next: (result) => {
    //     console.log(result);
    //     if(result.admin === "admin") {
    //       this.router.navigateByUrl("/")
    //     }
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    // })
  }

  ngOnInit(): void {}
}
