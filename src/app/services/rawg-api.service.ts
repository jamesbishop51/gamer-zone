import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {catchError,tap} from'rxjs/operators';
import { GameCollection } from 'src/app/interfaces/game'


@Injectable({
  providedIn: 'root'
})
export class RawgApiService {

    private readonly searchGameUrl 
private readonly newUrl
  constructor( private _http: HttpClient ) { 
    
    //this.searchGameUrl = 'https://api.rawg.io/api/key=games?key=1bd066df00ce4f4981b34685b13901c8&page_size=1&search='; they decided to add a key at the wrong time!!!!!
    this.newUrl ='https://api.rawg.io/api/games?key=1bd066df00ce4f4981b34685b13901c8&page_size=5&search=' //new search with key
  }
  public getGamesFromString(name: string): Observable<GameCollection> {
    return this._http.get<GameCollection>(this.newUrl + name );
  }
}
