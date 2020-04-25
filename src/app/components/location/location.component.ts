import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Geofence } from '@ionic-native/geofence/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.scss"]
})

export class LocationComponent implements OnInit {
  
  @ViewChild('map', {static:false}) mapElement: ElementRef;
  map: any;
  address:string;

  constructor(private geofence: Geofence, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {
    
  }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.map.addListener('tilesloaded', () => {
      console.log('accuracy',this.map);
      this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
    });
      this.addGeofence(1, 123-323, resp.coords.latitude, resp.coords.longitude, 'Hyderabad', 'home');
     }).catch((error) => {
       console.log('Error getting location : ' + JSON.stringify(error));
     });
  }

  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords "+lattitude+" "+longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if(value.length>0)
          responseAddress.push(value);

        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value+", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) =>{ 
        this.address = "Address Not Available!";
        console.log("Address Not Available! : " + JSON.stringify(error));
      });

  }

  private addGeofence(id, idx, lat, lng, place, desc) {
    let fence = {
      id: id,
      latitude: lat,
      longitude: lng,
      radius: 50,
      transitionType: 2,
      notification: {
          id: idx,
          title: 'You crossed ' + place,
          text: desc,
          openAppOnClick: true
      }
    }
  
    this.geofence.addOrUpdate(fence).then(
       () => {
        console.log('Geofence added');
        
       },
       (err) => console.log('Geofence failed to add' + JSON.stringify(err))
     );

     this.geofence.onTransitionReceived().subscribe((res) => {
      console.log('Notified');
    });
  }

  addFence() {
    console.log();
  }
}
