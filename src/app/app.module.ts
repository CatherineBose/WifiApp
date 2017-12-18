import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { WifiService } from './wifi.service';

import { AppComponent } from './app.component';
import { RootContainerComponent } from './root-container/root-container.component';
import { HeaderComponent } from './header/header.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    RootContainerComponent,
    HeaderComponent,
    MapContainerComponent,
    MapComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [WifiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
