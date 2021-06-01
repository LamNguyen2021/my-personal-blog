import { Component, OnInit } from '@angular/core';
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
    // khi có api rồi thì nhớ đổi taiKhoan -> username
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
    // khi có api rồi thì nhớ đổi matKhau -> password
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

    this.auth.login(this.loginForm.value).subscribe({
      next: (result) => {
        // Cập nhật thông tin admin vào biến currentAmdin trong AuthService
        this.auth.currentAdmin.next(result);

        // Lưu xuống localStorage
        localStorage.setItem('admin', JSON.stringify(result));

        this.router.navigateByUrl('/');
      },
      error: (error) => {
        alert(error.error.error);
      },
    });
  }

  ngOnInit(): void {}
}
