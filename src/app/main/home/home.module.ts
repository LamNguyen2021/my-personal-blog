import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './banner/banner.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { HomeComponent } from './home.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [BannerComponent, BlogListComponent, HomeComponent],
  imports: [CommonModule, HomeRoutingModule, NgxPaginationModule],
})
export class HomeModule {}
