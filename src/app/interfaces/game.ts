export interface Game {
}
export class GameCollection {
    count: number;
    next?: string;
    previous?: string;
    results:
    {
    id: number;
    slug: string;
    name: string;
    description: string;
    released: string;
    background_image:string;
    rating:number;
    metacritic:number;
    publishers:string;
    }[];
  }