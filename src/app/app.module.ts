import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LandingComponent } from './components/landing/landing.component';
import { LocationComponent } from './components/location/location.component';
import { HabitsComponent } from './components/habits/habits.component';
import { DataFetchService } from './services/data-fetch.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Geofence } from '@ionic-native/geofence/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    LandingComponent,
    LocationComponent,
    HabitsComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DataFetchService,
    Geofence,
    Geolocation,
    NativeGeocoder
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
