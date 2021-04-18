export interface IReview {
    title: String;
    name: String;
    score: string;
    reviewer: string;  
    review: string;
}
export class Review implements IReview {
    title: String;
    name: String;
    score: string;
    reviewer: string;
    review: string;

    constructor(title:string,name:string,review:string,reviewer:string,score:string){
        this.title = title;
        this.name = name;
        this.review = review;
        this.reviewer = reviewer;
        this.score = score;
    }
}
