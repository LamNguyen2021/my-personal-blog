import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NewComponent } from './new/new.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NewComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
