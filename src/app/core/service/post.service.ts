import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreatePost, NewPost } from '../model/post';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  createPost(values: CreatePost): Observable<NewPost> {
    const token = JSON.parse(localStorage.getItem('admin')).token;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': token,
      }),
    };

    const url = 'https://blog-nodejs-api.herokuapp.com/api/post';
    return this.http.post<NewPost>(url, values, httpOptions);
  }
}

// const token = JSON.parse(localStorage.getItem('admin')).token;

//     const httpHeader = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'x-access-token': token
//     });
//     httpHeader.append('Content-Type', 'application/json');
//     httpHeader.append('x-access-token', token);

//     const url = 'https://blog-nodejs-api.herokuapp.com/api/post';
//     return this.http.post<NewPost>(url, values, { headers: httpHeader });

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'x-access-token': token,
//   }),
// };

// const url = 'https://blog-nodejs-api.herokuapp.com/api/post';
// return this.http.post<NewPost>(url, values, httpOptions);
