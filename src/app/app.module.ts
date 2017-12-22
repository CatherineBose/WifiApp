import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { WifiService } from './services/wifi.service';
import { MapService } from './services/map.service';

import { AppComponent } from './app.component';
import { RootContainerComponent } from './root-container/root-container.component';
import { HeaderComponent } from './header/header.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchService } from './services/search.service';
import { LocationContainerComponent } from './location-container/location-container.component';
import { LoginContainerComponent } from './login-container/login-container.component';


@NgModule({
  declarations: [
    AppComponent,
    RootContainerComponent,
    HeaderComponent,
    MapContainerComponent,
    MapComponent,
    FooterComponent,
    NavComponent,
    NavbarComponent,
    SearchBoxComponent,
    LocationContainerComponent,
    LoginContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [WifiService, MapService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
