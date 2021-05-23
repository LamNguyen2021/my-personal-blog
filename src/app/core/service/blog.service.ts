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
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09';
    return this.http.get<Blog[]>(url);
  }

  getBlogDetail(blogId: string): Observable<BlogDetail> {
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?maPhim=${blogId}`;
    return this.http.get<BlogDetail>(url);
  }
}
