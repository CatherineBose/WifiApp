import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map'



@Injectable()
export class MapService {
  locations: BehaviorSubject<any[]> = new BehaviorSubject([]); 
  constructor(private _http:HttpClient) {
   }
   
   getlocations(){
     this._http.get('http://api.localhost.code:3000/v1/locations').map((result)=>result['data']).subscribe((data:any)=>{
       this.locations.next(data);
     })
   }
}
