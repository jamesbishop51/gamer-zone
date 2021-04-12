import { Component, OnInit } from '@angular/core';
import { NgAuthService } from "../../ng-auth.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(public ngAuthService: NgAuthService) { }
  ngOnInit(): void {
  }

}
