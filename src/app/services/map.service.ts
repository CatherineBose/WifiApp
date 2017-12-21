import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http'



@Injectable()
export class MapService {
  locations: BehaviorSubject<any[]> = new BehaviorSubject([]); 
  constructor(private _http:HttpClient) {
   }
   
   getlocations(){
     this._http.get('http://localhost:3000/shops').subscribe((data:any)=>{
       this.locations.next(data);
     })
   }
}
