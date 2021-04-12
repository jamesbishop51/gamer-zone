import { Component } from '@angular/core';

import { NgAuthService } from "./ng-auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(public ngAuthService: NgAuthService) { }
  title = 'gamer-zone';
}
