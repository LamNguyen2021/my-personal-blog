import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, AdminInfo } from '../model/auth';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Muốn sử dụng biến toàn cục không thể sử dụng 1 property bình thường mà phải sử dụng đối tượng BehaviorSubject

  // currentAdmin.next(value) => cập nhật giá trị cho biến currentAdmin
  // currentAdmin.value => Lấy ra giá trị của biến currentAdmin
  // currentAdmin.asObservable() => chuyển currentAdmin thành 1 Observable => mình có thể subscribe nó => mình có thể theo dõi sự thay đổi của biến này

  currentAdmin = new BehaviorSubject<AdminInfo | null>(null); // kiếm coi nơi nào cần cập nhật biến này: sau khi đăng nhập thành công -> login.ts

  constructor(private http: HttpClient) {}

  login(values: Login): Observable<AdminInfo> {
    const url =
      'http://localhost:10000/api/user/login';
    return this.http.post<AdminInfo>(url, values);
  }
}
