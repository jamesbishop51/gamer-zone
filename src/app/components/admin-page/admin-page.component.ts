import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NgAuthService } from "../../ng-auth.service";
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
    items: any[];
    constructor(public ngAuthService: NgAuthService,private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection('review_data').snapshotChanges().subscribe(data => {
        this.items = [];
        data.forEach(a => {
          const item: any = a.payload.doc.data();
          item.id = a.payload.doc.id;
          this.items.push(item);
        });
      });
  }
  addAdmin(email) {
    let addRole=firebase.functions().httpsCallable('addAdminRole');
    console.log(email.value)
    addRole({email:email.value})
    .then((result) => {
      // Read result of the Cloud Function.
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
   return false;
  }

  removeAdmin(email) {
    let removeRole=firebase.functions().httpsCallable('removeAdminRole');
    removeRole({email:email.value})
    .then((result) => {
      // Read result of the Cloud Function.
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
   return false;
  }
  delete(item) {
    this.db.doc(`review_data/${item.id}`).delete();
  }
}
