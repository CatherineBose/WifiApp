import { Component, OnInit, AfterViewInit, Input, OnChanges } from '@angular/core';
import { MapService } from '../services/map.service';
import * as mapboxgl from 'mapbox-gl';
import { GeoJson } from '../maps';
import { environment } from '../../environments/environment';
import { trigger,style,transition,animate,keyframes,query,stagger,state,} from '@angular/animations';
import { Subject } from 'rxjs/Subject';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  animations: [
    trigger ('slide', [
      state('hide', style({
        'opacity': '0'
      })),
      state('show', style({
        'opacity': '1',
      })),
      transition('hide => show', animate('900ms ease-in')),
    ]),
  ]
})
export class MapComponent implements OnInit {
  private map: mapboxgl.Map;  
  private state;
  
  @Input() style: string = 'mapbox://styles/mapbox/dark-v9';
  
  constructor(private _mapService: MapService) { 
    mapboxgl.accessToken = environment.mapbox.accessToken
  }

  ngOnInit() {
    this.initializeMap();  
    this.state = 'hide';
  }
  ngAfterViewInit(){
    Promise.resolve(null).then(() => this.state = 'show');
  }
//Initalize Map with Coords
  private initializeMap() {
      // Get coordinates
      navigator.geolocation.getCurrentPosition(position => {
        // 🛩
        this.map.flyTo({
          center: [position.coords.longitude, position.coords.latitude]
        });
      });
      this.buildMap()
    }
//Build Map
  private buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
  });
  //Add a marker to Map (Not working, But is showing event data in console.)
  this.map.on('click', (event) => {
    console.log(event.lngLat.lng);
    let marker = new mapboxgl.Marker();
    marker.setLngLat([event.lngLat.lng, event.lngLat.lat]);
    marker.addTo(this.map);
  })
}
}
 