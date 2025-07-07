import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './core/home-page/home-page.component';
import { SignUpPageComponent } from './core/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './core/login-page/login-page.component';
import { UserDashboardComponent } from './core/user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', component: UserDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
