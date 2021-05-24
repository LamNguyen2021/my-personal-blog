import { Component, OnInit } from '@angular/core';
import { AdminInfo } from 'src/app/core/model/auth';
import { AuthService } from 'src/app/core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent implements OnInit {
  currentAdmin: AdminInfo | null = null;

  constructor(private auth: AuthService, private router: Router) {}

  removeLocalStorage() {
    localStorage.removeItem("admin");
  }

  ngOnInit(): void {
    // Theo dõi sự thay đổi của currentAdmin bên trong service bằng cách chuyển nó thành 1 Observable
    // Khi currentAdmin thay đổi, sẽ tự động chạy vào callback next và nhận được data mới
    this.auth.currentAdmin.asObservable().subscribe({
      next: (currentAdmin) => {
        this.currentAdmin = currentAdmin;
      },
    });
  }
}
