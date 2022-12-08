import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./Modules/auth/auth.module').then((m) => m.default) },
  { path: 'home', loadChildren: () => import('./Modules/home/home.module').then((m) => m.default) },
  { path: '', loadChildren: () => import('./Modules/landing/landing.module').then((m) => m.default) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
class AppRoutingModule { }
export default AppRoutingModule;
