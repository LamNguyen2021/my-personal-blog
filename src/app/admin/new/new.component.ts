import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/core/service/post.service';
import { BlogService } from 'src/app/core/service/blog.service';
import { BlogDetail } from 'src/app/core/model/blog';
import { Router } from '@angular/router';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  url_regex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  isEditMode: boolean = false;
  id: string;
  blogDetail: BlogDetail[] = [];

  public Editor = ClassicEditor;

  createForm: FormGroup = new FormGroup({
    categoryId: new FormControl('60b65e8bce734c00151f7d7c'),
    title: new FormControl('', [Validators.required]),
    urlImage: new FormControl('', [
      Validators.required,
      Validators.pattern(this.url_regex),
    ]),
    excerpt: new FormControl('', [
      Validators.required,
      Validators.minLength(100),
    ]),
    content: new FormControl('', [Validators.required]),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private blogService: BlogService,
    private router: Router
  ) {}

  handleSubmitArticle(createForm: any) {
    if (createForm.invalid) {
      return;
    }

    if (this.isEditMode) {
      this.postService.editPost(createForm.value, this.id).subscribe({
        complete: () => {
          createForm.reset();
          alert('Edit post success');
          this.router.navigateByUrl('/');
        },
      });
    } else {
      this.postService.createPost(createForm.value).subscribe({
        complete: () => {
          createForm.reset();
          alert('Create post success');
          this.router.navigateByUrl('/');
        },
      });
    }
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.isEditMode = true;

      // lay duoc params, thi goi API
      this.blogService.getBlogDetail(this.id).subscribe((result) => {
        this.createForm.patchValue({
          title: result[0].title,
          urlImage: result[0].urlImage,
          excerpt: result[0].excerpt,
          content: result[0].content,
        });
      });
    }
  }
}
