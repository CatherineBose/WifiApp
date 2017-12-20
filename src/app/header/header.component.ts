import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { Router } from '@angular/router';
import { Route } from '@angular/router/src/config';
import { MapService } from '../services/map.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],  
})
export class HeaderComponent implements OnInit {
  search;
  constructor( private _route : Router, private _mapService: MapService) { }
  
  
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.search);
    this._route.navigate([this.search]);;
  }
}
