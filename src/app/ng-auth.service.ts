import { Injectable, NgZone } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { customClaims, idTokenResult } from '@angular/fire/auth-guard';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import * as firebase from 'firebase/app';
import {auth} from 'firebase/app'  

//this no longer works so was replaced with import below 
//and now auth needs to be firebase.auth instead of just auth
//import firebase from 'firebase/app'

export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;

 }

@Injectable({
  providedIn: 'root'
})

export class NgAuthService {
    userState: any;
    userAdmin:boolean;

    constructor(
      public afs: AngularFirestore,
      public afAuth: AngularFireAuth,
      public router: Router,
      public ngZone: NgZone
    ) {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.userState = user;
          localStorage.setItem('user', JSON.stringify(this.userState));
          JSON.parse(localStorage.getItem('user'));
        } else {
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
        }
      })


    }
  
    // check if this user has a claim in their token
    IsAdmin() {
      return firebase.auth().currentUser.getIdTokenResult(true)
      .then((idTokenResult) => {
        const claim = idTokenResult;    
        if(claim.claims.admin) return true; else return false;

      });
    }



    SignIn(email, password) {
      return this.afAuth.signInWithEmailAndPassword(email, password)
        .then((result) => {
          this.ngZone.run(() => {
            this.router.navigate(['profile']);
          });
          firebase.auth().currentUser.getIdTokenResult(true)
          .then((idTokenResult) => {
            const claim = idTokenResult;     
            console.log(this.userState.email);
            console.log(claim.claims.admin);
            if (claim.claims.admin) {
               this.userAdmin=true;
            }
          });

         this.SetUserData(result.user);

  
        }).catch((error) => {
          window.alert(error.message)
        })
    }
  
    updateImg( photoURL){
        return firebase.auth().currentUser.updateProfile({
            
            photoURL 
        }).then(() => {
            return{
                message: `updated info`
            }
        }).catch(err => {
            return err;
        })
    }
    updateUserName(displayName){
        return firebase.auth().currentUser.updateProfile({
            displayName
        }).then(()=>{
            return{
                message: `updated info`
            }
        }).catch(err => {
            return err;
        })
    }


    SignUp(email, password) {
        return this.afAuth.createUserWithEmailAndPassword(email, password)
          .then((result) => {
            this.SendVerificationMail();
            this.SetUserData(result.user);
          }).catch((error) => {
            window.alert(error.message)
          })
      }

    SendVerificationMail() {
        return this.afAuth.currentUser.then(u => u.sendEmailVerification())
        .then(() => {
          this.router.navigate(['email-verification']);
        })
    }    
  
    ForgotPassword(passwordResetEmail) {
      return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
    }
  
    isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      return (user !== null && user.emailVerified !== false) ? true : false;
    }
  
    GoogleAuth() {
      this.userAdmin=false;
      return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
    }
  
    AuthLogin(provider) {
      return this.afAuth.signInWithPopup(provider)
      .then((result) => {
         this.ngZone.run(() => {
            this.router.navigate(['profile']);
          })
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error)
      })
    }
  
    SetUserData(user) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
 
      const userState: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified


      }
      return userRef.set(userState, {
        merge: true
      })
    }
   
    SignOut() {
      this.userAdmin=false;
      return this.afAuth.signOut().then(() => {
        localStorage.removeItem('user');
        this.userState=null;
        this.router.navigate(['sign-in']);
      })
    }  



}