export interface IReview {
    name: String;
    score: string;
    reviewer: string;  
    review: string;
}
export class Review implements IReview {
    name: String;
    score: string;
    reviewer: string;
    review: string;

    constructor(name:string,review:string,reviewer:string,score:string){
        this.name = name;
        this.review = review;
        this.reviewer = reviewer;
        this.score = score;
    }
}
