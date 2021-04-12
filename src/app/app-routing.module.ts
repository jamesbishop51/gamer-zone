import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from "./auth.guard";
import {AdminPageComponent} from './components/admin-page/admin-page.component'


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent, },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]  },
    { path: 'admin-page', component: AdminPageComponent, canActivate: [AuthGuard]},
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'email-verification', component: VerifyEmailComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
