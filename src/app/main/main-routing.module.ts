import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailModule } from './detail/detail.module';
import { HomeModule } from './home/home.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  // Muốn Home và Detail có chung layout
  // Trong html của MainLayoutComponent phải có router-outlet
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', loadChildren: () => HomeModule },
      { path: 'detail/:blogId', loadChildren: () => DetailModule },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
