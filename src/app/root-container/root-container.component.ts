import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root-container',
  templateUrl: './root-container.component.html',
  styleUrls: ['./root-container.component.scss']
})
export class RootContainerComponent implements OnInit {
  search;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.search);
  }
}
