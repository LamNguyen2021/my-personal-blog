import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  url_regex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  isEditMode: boolean = false;
  id: string;

  public Editor = ClassicEditor;

  createForm: FormGroup = new FormGroup({
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

  constructor(private activatedRoute: ActivatedRoute) {}

  handleSubmitArticle(createForm: any) {
    if (createForm.invalid) {
      return;
    }
    console.log(createForm.value);

    createForm.reset();
  }

  ngOnInit(): void {
    // this.id = this.activatedRoute.snapshot.params['id'];
    // if (this.id) {
    //   this.isEditMode = true;
    // }
    // console.log(this.isEditMode);
  }
}
