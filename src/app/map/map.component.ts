import { Component, OnInit, AfterViewInit, Input} from '@angular/core';
import { MapService } from '../services/map.service';
import * as mapboxgl from 'mapbox-gl';
import { GeoJson } from '../maps';
import { environment } from '../../environments/environment';
import { trigger,style,transition,animate,keyframes,query,stagger,state,} from '@angular/animations';

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
  private locations;
  private center: Array<number> = [-122.442781539829111, 37.76390011952246];
  
  @Input() style: string = 'mapbox://styles/mapbox/dark-v9';

  constructor(private _mapService: MapService) { 
    mapboxgl.accessToken = environment.mapbox.accessToken
  }

  ngOnInit() {
    this.initializeMap();  
    this.state = 'hide';
    this._mapService
      .locations
      .subscribe(locations => this.locations = locations)

    // this.route
    //   .queryParams
    //   .subscribe(params => {
    //     // params['search']
    //     // Take that param
    //     // Search google
    //     //         
    //     // 🛩
    //     this.map.flyTo({
    //       center: // [Coords from google]
    //     });
    //   })

    // this.route
    //   .paramsMap()
    //   .subscribe(params => {
        
    //     // 🛩
    //     this.map.flyTo({
    //       center: // [Coords from google]
    //     });
    //   })
  }
  ngAfterViewInit(){
    Promise.resolve(null).then(() => this.state = 'show');
  }
  // Initalize Map with Coords
  private initializeMap() {
      // Get coordinates
      // navigator.geolocation.getCurrentPosition(position => {
      //   // 🛩
      //   this.map.flyTo({
      //     center: [position.coords.longitude, position.coords.latitude]
      //   });
      // });
      this.buildMap()
    }
//Build Map
  private buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: this.center
  });
  //Add a marker to Map (Not working, But is showing event data in console.)
  // this.map.on('click', (event) => {
  //   console.log(event.lngLat);
  //   let marker = new mapboxgl.Marker();
  //   marker.setLngLat([event.lngLat.lng, event.lngLat.lat]);
  //   marker.addTo(this.map);
  // })
  this.map.on('load', (event)=>{
    console.log(this.locations)
    this.locations.map(location => this.createMarkerPopup(location));
  })
}

private createMarkerPopup(location) {
  // Create element
  let el = document.createElement('div');
  el.className = 'tg-marker';
  el.id = 'tg_marker_' + location.id;

  // Create Popup
  console.log(location.coordinates)
  let popup = new mapboxgl.Popup({
    closeOnClick: false, 
    closeButton: false, 
    offset: { 'bottom': [0, -12] }
  }).setHTML(`
    <img src="http://placehold.it/700x500" class="rounded mb-3 img-responsive">
  
    <div class="h5">${location.attributes.name}</div>
    <div class="text-gray">${location.attributes.description }</div>
  `);
  
  // create the marker
  new mapboxgl.Marker(el)
    .setLngLat(location.attributes.coordinates)
    .setPopup(popup) // sets a popup on this marker
    .addTo(this.map);
}

}
 