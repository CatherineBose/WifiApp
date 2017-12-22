import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { MapService } from '../services/map.service';
import 'rxjs/add/operator/switchMap';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  term$ = new Subject<string>();
  locations;

  constructor(
    private _mapService: MapService,
    private _searchService: SearchService
  ) { }

  ngOnInit() {
    this._searchService
      .search(this.term$)
      .subscribe(locations => this.locations = locations)
  }

}
