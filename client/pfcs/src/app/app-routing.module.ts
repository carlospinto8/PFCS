import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './core/home-page/home-page.component';
import { SignUpPageComponent } from './core/sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
