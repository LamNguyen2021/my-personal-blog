import { Component, OnInit } from '@angular/core';
import { BlogService } from "src/app/core/service/blog.service";
// Dùng để lấy params trên url
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blogDetail:any = {};

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        // lay duoc params, thi goi API
        this.blogService.getBlogDetail(params.blogId).subscribe({
          next: (result) => {
            this.blogDetail = result;
          }
        })
      }
    })
  }

}
