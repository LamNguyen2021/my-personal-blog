import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog, BlogDetail } from '../model/blog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getBlogList(): Observable<Blog[]> {
    const url = 'http://localhost:10000/api/post/';
    return this.http.get<Blog[]>(url);
  }

  getBlogDetail(blogId: string): Observable<BlogDetail[]> {
    const url = `http://localhost:10000/api/post/${blogId}`;
    return this.http.get<BlogDetail[]>(url);
  }
}
