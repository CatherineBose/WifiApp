import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootContainerComponent } from './root-container/root-container.component';
import { MapComponent } from './map/map.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { LocationContainerComponent } from './location-container/location-container.component';
import { LoginContainerComponent } from './login-container/login-container.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: RootContainerComponent },
  { path: 'locations/:id', pathMatch: 'full', component: LocationContainerComponent },
  { path: 'login', pathMatch: 'full', component: LoginContainerComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
