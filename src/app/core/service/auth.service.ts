import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, AdminInfo } from '../model/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(values: Login): Observable<AdminInfo> {
    if (values.username === 'admin' && values.password === 'admin') {
      return new Observable((subscribe) => {
        setTimeout(() => {
          subscribe.next({
            username: 'admin',
          }),
          subscribe.error("username khong ton tai")
        }, 2000);
      });
    } else {
      console.log('username khong ton tai');
    }
  }

  // login(values: Login): Observable<AdminInfo> {
  //   const url = "";
  //   return this.http.post<AdminInfo>(url,values)
  // }
}
