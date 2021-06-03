import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/core/service/post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  url_regex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  public Editor = ClassicEditor;

  editForm: FormGroup = new FormGroup({
    categoryId: new FormControl('60b65e8bce734c00151f7d7c'),
    title: new FormControl('', [Validators.required]),
    image: new FormControl('', [
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
  ) {}

  handleSubmitArticle(createForm: any) {
    if (createForm.invalid) {
      return;
    }

    // this.postService.createPost(createForm.value).subscribe({
    //   next: (result) => {
    //     console.log(result);
    //   },

    // })

    createForm.reset();
  }

  ngOnInit(): void {
  }

}
