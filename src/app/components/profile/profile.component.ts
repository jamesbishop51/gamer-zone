import { Component, OnInit } from '@angular/core';
import { NgAuthService } from "../../ng-auth.service";
import {FormControl, Validators} from "@angular/forms";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    
    
    show:boolean;
    searchText = new FormControl('', Validators.required);
    profileImg = new FormControl('', Validators.required);
    username = new FormControl('', Validators.required);
  constructor(public ngAuthService: NgAuthService) { }

  ngOnInit(): void {
  }

}
