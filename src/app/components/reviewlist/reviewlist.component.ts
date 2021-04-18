import { Component, OnInit } from '@angular/core';
import { ReviewApiService } from 'src/app/services/review-api.service'
import { IReview, Review } from 'src/app/interfaces/review';
import { NgAuthService } from "../../ng-auth.service";


@Component({
  selector: 'app-reviewlist',
  templateUrl: './reviewlist.component.html',
  styleUrls: ['./reviewlist.component.css'],
  providers: [ReviewApiService]
})
export class ReviewlistComponent implements OnInit {
    
    reviewsData: IReview[];
    show:boolean;
    constructor(private _reviewAPIService:ReviewApiService,public ngAuthService: NgAuthService) { }
    
  ngOnInit(): void {
    this._reviewAPIService.getReviewData().subscribe(reviewsData =>
        { this.reviewsData = reviewsData });
  }
  addTheReview(title:string,name:string, score:string,review:string,reviewer:string):boolean{
    let tempReview:IReview;
    tempReview=new Review(title,name,review,reviewer,score);
    this._reviewAPIService.addReviewData(tempReview);
    return false;
  }
}
