import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map'



@Injectable()
export class MapService {
  locations: BehaviorSubject<any[]> = new BehaviorSubject([]); 

  constructor(private _http:HttpClient) { }

   getlocations() {
     return this._http
      .get('http://api.localhost.code:3000/v1/locations')
      .map(result => result['data'])
   }
   getLocation(id){
     return this._http
     .get('http://api.localhost.code:3000/v1/locations'+id)
     .map(result => result['data'])
   }
   getGoogleLocation(term){
    return this._http
    .get('https://maps.googleapis.com/maps/api/geocode/json?address='+term+'&key=AIzaSyAi65tuSx63BkUxBkQf6dxDdswrrqgLICU')
    .map(results => results['results'])
   }

}
