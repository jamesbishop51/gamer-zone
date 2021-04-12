import { Component, OnInit , Input} from '@angular/core';
import { IReview } from 'src/app/interfaces/review';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
    @Input() reviewData:IReview;
  constructor() { }

  ngOnInit(): void {
  }

}
