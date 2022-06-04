import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path:'auth', //TODO: localhost:4200/auth <---
    loadChildren: () => import(`./modules/auth/auth.module`).then(modulo => modulo.AuthModule)
  },
  {
    path:'', //TODO: localhost:4200/home <---
    component: HomePageComponent,
    loadChildren: () => import(`./modules/home/home.module`).then(modulo => modulo.HomeModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
