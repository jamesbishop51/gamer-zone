import { Component, OnInit } from '@angular/core';
import {RawgApiService} from 'src/app/services/rawg-api.service';
import {FormControl, Validators} from "@angular/forms";
import { GameCollection, Game } from 'src/app/interfaces/game';
import { NgAuthService } from "../../ng-auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    searchText = new FormControl('', Validators.required);
    games: Game[];
    gameImageWidth:number=300;
    gameImageHeight:number =200;
    constructor(  private RawgApiService: RawgApiService,public ngAuthService: NgAuthService ) { }

  

  ngOnInit(): void {
  }
  searchForGames() {  
    this.RawgApiService.getGamesFromString(this.searchText.value).subscribe((result: GameCollection) => {
      this.games = result.results;
      return this.games;
    });
  }
}
