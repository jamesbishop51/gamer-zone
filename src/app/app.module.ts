import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { NgAuthService } from "./ng-auth.service";
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReviewComponent } from './components/review/review.component';
import { ReviewlistComponent } from './components/reviewlist/reviewlist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
      AppComponent,
      SignInComponent,
      SignUpComponent,
      ForgotPasswordComponent,
      VerifyEmailComponent,
      HomeComponent,
      ProfileComponent,
      AdminPageComponent,
      NavbarComponent,
      FooterComponent,
      ReviewComponent,
      ReviewlistComponent,
      
      
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFirestoreModule,
      HighlightModule,  
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      NgbModule,
       
    ],
    providers: [
       {
        provide: NgAuthService
       }, 
    
    ],
        
    bootstrap: [AppComponent],
    
    
    
  })
  export class AppModule { }
  