import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/core/service/blog.service';
import { Blog } from 'src/app/core/model/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  blogList: Blog[] = [];

  constructor(private blogService: BlogService) {}

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
        console.log('DONE');
      },
    });
  }
}
