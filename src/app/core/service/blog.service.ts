import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog, BlogDetail, BlogGroup } from '../model/blog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getBlogList(currentPage:number): Observable<BlogGroup> {
    const url = `https://blog-nodejs-api.herokuapp.com/api/post/paging?pageSize=5&page=${currentPage}`;
    return this.http.get<BlogGroup>(url);
  }

  getBlogDetail(blogId: string): Observable<BlogDetail> {
    const url = `https://blog-nodejs-api.herokuapp.com/api/post/${blogId}`;
    return this.http.get<BlogDetail>(url);
  }
}
