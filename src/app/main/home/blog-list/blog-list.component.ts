import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/core/service/blog.service';
import { Blog, BlogGroup } from 'src/app/core/model/blog';
import { AuthService } from 'src/app/core/service/auth.service';
import { AdminInfo } from 'src/app/core/model/auth';
import { PostService } from 'src/app/core/service/post.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  blogList: Blog[] = [];
  currentAdmin: AdminInfo | null = null;
  currentPage = 1;
  totalRecords;

  constructor(
    private blogService: BlogService,
    private auth: AuthService,
    private postService: PostService
  ) {}

  handleDelete(blogId) {
    const isDelete = confirm('Are you sure you want to delete ?');
    if (isDelete) {
      this.postService.deletePost(blogId).subscribe(() => {
        alert('Delete success');
        this.getBlogList();
      });
    }
  }

  pageChanged(e) {
    this.currentPage = e;
    this.getBlogList();
    document.getElementById("oley").scrollIntoView();
  }

  getBlogList() {
    this.blogService.getBlogList(this.currentPage).subscribe({
      // Nhận data
      next: (result) => {
        this.totalRecords = result.totalRecords;

        result.data.forEach((el) => {
          el.publishDate = new Date(el.publishDate).toLocaleDateString('en-GB');
          el.lastModified = new Date(el.lastModified).toLocaleDateString(
            'en-GB'
          );
        });

        this.blogList = result.data;
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
  }

  ngOnInit(): void {
    this.getBlogList()

    // Theo dõi sự thay đổi của currentAdmin bên trong service bằng cách chuyển nó thành 1 Observable
    // Khi currentAdmin thay đổi, sẽ tự động chạy vào callback next và nhận được data mới
    this.auth.currentAdmin.asObservable().subscribe({
      next: (currentAdmin) => {
        this.currentAdmin = currentAdmin;
      },
    });
  }
}
