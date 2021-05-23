import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';

const routes: Routes = [
  {path: 'admin', loadChildren: () => AdminModule},
  {path: '', loadChildren: () => MainModule},
  {path: '', loadChildren: () => AuthModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
