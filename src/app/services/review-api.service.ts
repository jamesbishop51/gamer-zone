import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { IReview } from "../interfaces/review";


@Injectable({
  providedIn: 'root'
})
export class ReviewApiService {

    reviewsDataCollection:AngularFirestoreCollection<IReview>;
    reviewsData:Observable<IReview[]>;
    allReviewsData:IReview[];
    errorMessage: String;
  
    constructor(private _http:HttpClient, private _afs:AngularFirestore) {
  
      this.reviewsDataCollection=_afs.collection<IReview>("review_data");
  
     }
     getReviewData():Observable<IReview[]>{
        this.reviewsData = this.reviewsDataCollection.valueChanges();
        this.reviewsData.subscribe(data => console.log("getReviewData:" + JSON.stringify(data)));
        return this.reviewsData;
        
      }
   
      addReviewData(review:IReview): void{
        this.reviewsDataCollection.add(JSON.parse(JSON.stringify(review)));
      }
}
