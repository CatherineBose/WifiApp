import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootContainerComponent } from './root-container/root-container.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: RootContainerComponent },
  { path: 'map', pathMatch: 'full', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
