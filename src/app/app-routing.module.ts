import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootContainerComponent } from './root-container/root-container.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: RootContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
