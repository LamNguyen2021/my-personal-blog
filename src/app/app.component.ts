import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    const admin = localStorage.getItem('admin');

    // Nếu có key admin trong localStorage, lấy ra và cập nhật lại cho biến currentAdmin trong service
    if(admin) {
      this.auth.currentAdmin.next(JSON.parse(admin))
    }
  }
}
