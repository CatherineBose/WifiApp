import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private searchActive: boolean = false;
  private currentRoute: string; 
  
  constructor(private _route: Router, private _actRoute: ActivatedRoute, private _location: Location) {
    this._actRoute.paramMap.subscribe( params => {
      this.currentRoute = params.get('id');
    })
    this._route.events.subscribe((val) => {
      if(this._location.path() !=''){
        this.searchActive = true;
      } else{
        this.searchActive = false;
      }
    })

  }

  ngOnInit() {
  }

}
