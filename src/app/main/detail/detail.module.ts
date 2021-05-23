import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';


@NgModule({
  declarations: [BlogDetailComponent],
  imports: [
    CommonModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
