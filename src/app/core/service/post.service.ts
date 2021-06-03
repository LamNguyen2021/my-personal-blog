import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreatePost, EditedPost, EditPost, NewPost } from '../model/post';
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

  editPost(values: EditPost, id: string): Observable<EditedPost> {
    const url = `https://blog-nodejs-api.herokuapp.com/api/post/${id}`;
    return this.http.put<EditedPost>(url, values);
  }

  deletePost(id: string):Observable<any> {
    const url = `https://blog-nodejs-api.herokuapp.com/api/post/${id}`;
    return this.http.delete(url)
  }
}
