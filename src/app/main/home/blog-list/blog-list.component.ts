import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/core/service/blog.service';
import { Blog } from 'src/app/core/model/blog';
import { AuthService } from 'src/app/core/service/auth.service';
import { AdminInfo } from 'src/app/core/model/auth';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  blogList: Blog[] = [];
  currentAdmin: AdminInfo | null = null;

  constructor(private blogService: BlogService, private auth: AuthService) {}

  ngOnInit(): void {
    this.blogService.getBlogList().subscribe({
      // Nhận data
      next: (result) => {
        this.blogList = result;
      },
      // Nhận lỗi và kết thúc observable
      error: (err) => {
        console.log(err);
      },
      // Nhận khi observable kết thúc
      complete: () => {
        console.log('Done render blogList');
      },
    });

    // Theo dõi sự thay đổi của currentAdmin bên trong service bằng cách chuyển nó thành 1 Observable
    // Khi currentAdmin thay đổi, sẽ tự động chạy vào callback next và nhận được data mới
    this.auth.currentAdmin.asObservable().subscribe({
      next: (currentAdmin) => {
        this.currentAdmin = currentAdmin;
      },
    });
  }
}
