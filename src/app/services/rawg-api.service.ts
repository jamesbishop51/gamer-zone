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

  constructor( private _http: HttpClient ) { 
    
    this.searchGameUrl = 'https://api.rawg.io/api/games?page_size=1&search=';

  }
  public getGamesFromString(name: string): Observable<GameCollection> {
    return this._http.get<GameCollection>(this.searchGameUrl + name );
  }
}
