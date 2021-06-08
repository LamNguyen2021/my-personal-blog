import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/core/service/blog.service';
// Dùng để lấy params trên url
import { ActivatedRoute } from '@angular/router';
import { BlogDetail } from 'src/app/core/model/blog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  blogDetail: BlogDetail;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    this.activatedRoute.params.subscribe({
      next: (params) => {
        // lay duoc params, thi goi API
        this.blogService.getBlogDetail(params.blogId).subscribe((result) => {
          result.publishDate = new Date(
            result.publishDate
          ).toLocaleDateString('en-GB');

          result.lastModified = new Date(
            result.lastModified
          ).toLocaleDateString('en-GB');

          this.blogDetail = result;
        });
      },
    });
  }
}
