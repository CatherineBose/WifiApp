import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  search;
  constructor(private _route : Router) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.search);
    this._route.navigate([this.search]);;
    // Seet active to true
  }
}
