import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { MapService } from '../services/map.service';
import * as mapboxgl from 'mapbox-gl';
import { GeoJson } from '../maps';
import { environment } from '../../environments/environment'


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private map: mapboxgl.Map;

  @Input() style: string = 'mapbox://styles/mapbox/dark-v9';
  
  constructor(private _mapService: MapService) { 
    mapboxgl.accessToken = environment.mapbox.accessToken
  }

  ngOnInit() {
    this.initializeMap()
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
    console.log(event);
    let marker = new mapboxgl.Marker();
    marker.setLngLat([event.lngLat.lng, event.lngLat.lat]);
    marker.addTo.map;
  })
}
}
 