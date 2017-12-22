import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MapService } from '../services/map.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root-container',
  templateUrl: './root-container.component.html',
  styleUrls: ['./root-container.component.scss']
})
export class RootContainerComponent implements OnInit {
  displayMap: boolean = false;

  constructor(
    private _mapService : MapService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        (params['search']) ? this.displayMap = true : this.displayMap = false
      })
  }
}
