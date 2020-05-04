import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Geofence } from '@ionic-native/geofence/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { tileLayer, latLng, circle, marker, MapOptions, Icon, icon } from 'leaflet';
import { coords } from '../../models/geofence.interface';
import { DataService } from '../../services/data.service';
import { NativeGeocoderOptions, NativeGeocoder, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.scss"]
})

export class LocationComponent implements OnInit {

  myPosition: coords;
  layers = [];
  layersControl;
  options: MapOptions;
  showMap: boolean;
  center;
  categories = ['Red Zones', 'Hospitals', 'Grocery Stores', 'Medical Stores', 'Charity Zones'];
  category = this.categories[0];

  constructor(
    private dataService: DataService, private geofence: Geofence, private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder
  ) { }

  async ngOnInit() {

    this.showMap = false;
    this.myPosition = {
      accuracy: 0,
      latitude: 0,
      longitude: 0
    };

    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 13,
      center: null
    };

    //this.loadRedZones();
    this.loadReadZonesMock();

  }

  private loadRedZones() {
    this.layers = [];
    // this.geofence.initialize().then(()=>{
    this.geolocation.getCurrentPosition().then((resp) => {
      let geoCoderOptions: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };

      this.myPosition.latitude = resp.coords.latitude;
      this.myPosition.longitude = resp.coords.longitude;
      this.options.center = latLng(this.myPosition.latitude, this.myPosition.longitude);
      var i = 0;
      this.dataService.localities.forEach(place => {
        this.addAllFences(geoCoderOptions, i, place);
        i++;
      })

    }).catch((error) => {
      console.log(JSON.stringify(error));
    });
    // }).catch((error) => {
    //   console.log('Geofence not initialised'+ JSON.stringify(error));
    // });
  }

  private addAllFences(options, i, place) {
    this.nativeGeocoder.forwardGeocode(place.name, options)
      .then((result: NativeGeocoderResult[]) => {
        console.log('redzone : ' + place + ' ' + result[0].latitude + ' : ' + result[0].longitude);
        this.addGeofence(i + 1, 123 - 323 + i, result[0].latitude, result[0].longitude, place.name, 'Covid cases : ' + place.count);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  private addGeofence(id, idx, lat, lng, place, desc) {
    let fence = {
      id: id,
      latitude: lat,
      longitude: lng,
      radius: 3000,
      transitionType: 2,
      notification: {
        id: idx,
        title: place,
        text: desc,
        openAppOnClick: true
      }
    }

    // this.geofence.addOrUpdate(fence).then(
    //   () => {

    //   },
    //   (err) => {
    //     alert('Geofence failed to add' + JSON.stringify(err))
    //   }
    // );

    // this.geofence.onTransitionReceived().subscribe((res) => {
    //   alert('Notified');
    // });

    this.layers.push(
      circle([fence.latitude, fence.longitude], { radius: fence.radius }).bindPopup(`<b>${fence.notification.title}</b><p>${fence.notification.text}</p>`)
        .setStyle({
          fillColor: '#f21818',
          color: '#f21818'
        })
    )

    setTimeout(() => {
      this.showMap = true;
      this.setLayer();
    }, 500);
  }

  setLayer(): void {
    this.layers.push(marker([this.myPosition.latitude, this.myPosition.longitude], {
      autoPan: true,
      icon: icon({
        iconSize: [18, 18],
        //iconAnchor: [ 10, 10],
        iconUrl: 'assets/marker.png',
        //shadowUrl: 'assets/marker-shadow.png'
      })
    }));
  }

  categoryChange(evtObj) {
    this.category = evtObj.detail.value;
    if (this.category === this.categories[0]) {
      this.loadRedZones();
    } else if (this.category === this.categories[1]) {
      this.loadGoogleMap(this.dataService.hospitals);
    } else if (this.category === this.categories[2]) {
      this.loadGoogleMap(this.dataService.groceryStores);
    } else if (this.category === this.categories[3]) {
      this.loadGoogleMap(this.dataService.medicalStores);
    } else if (this.category === this.categories[4]) {
      this.loadGoogleMap(this.dataService.charityZones);
    }
  }


  private loadGoogleMap(places: any[]) {
    this.layers = [];
    this.geolocation.getCurrentPosition().then((resp) => {
      let geoCoderOptions: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };
      this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, geoCoderOptions)
        .then((addressResult: NativeGeocoderResult[]) => {
          this.myPosition.latitude = resp.coords.latitude;
          this.myPosition.longitude = resp.coords.longitude;
          this.options.center = latLng(this.myPosition.latitude, this.myPosition.longitude);
          var i = 0;
          places.forEach(place => {
            //this.addMarkerPoints(geoCoderOptions, i, place, addressResult[0].subLocality);
            this.addMarkerPoints(geoCoderOptions, i, place, 'Bandlaguda Jagir');
            i++;
          })
        })
        .catch((error: any) => {
          //alert("Address Not Available! : " + JSON.stringify(error));
        });
    }).catch((error) => {
      console.log(JSON.stringify(error));
    });
  }

  private addMarkerPoints(options, i, place, subLocality) {
    if (this.category != this.categories[4]) {
      place = place + ', ' + subLocality
    }
    this.nativeGeocoder.forwardGeocode(place, options)
      .then((result: NativeGeocoderResult[]) => {
        this.nativeGeocoder.reverseGeocode(parseFloat(result[0].latitude), parseFloat(result[0].longitude), options)
          .then((addressResult: NativeGeocoderResult[]) => {
            let address = '';
            let responseAddress = [];
            for (let [key, value] of Object.entries(addressResult[0])) {
              if (value.length > 0)
                responseAddress.push(value);

            }
            responseAddress.reverse();
            for (let value of responseAddress) {
              address += value + ", ";
            }
            address = address.slice(0, -2);
            console.log(this.category + ' : ' + place + ' ' + result[0].latitude + ' : ' + result[0].longitude);
            console.log(address);
            this.layers.push(
              marker([parseFloat(result[0].latitude), parseFloat(result[0].longitude)]).bindPopup(`<b>${place} <span style="color:green;">(Open)</span></b><p>${address}</p>`)
            )
            setTimeout(() => {
              this.showMap = true;
              this.setLayer();
            }, 500);
          })
          .catch((error: any) => {
            console.log("Address Not Available! : " + JSON.stringify(error));
          });
      })
      .catch((error: any) => {
        console.log(error);
      });
  }


  private loadReadZonesMock() {
    this.layers = [];
    // this.geofence.initialize().then(()=>{
    this.geolocation.getCurrentPosition().then((resp) => {
      this.myPosition.latitude = resp.coords.latitude;
      this.myPosition.longitude = resp.coords.longitude;
      this.options.center = latLng(this.myPosition.latitude, this.myPosition.longitude);
      var i = 0;
      this.dataService.localitiesMock.forEach(place => {
        this.layers.push(
          circle([place.latitude, place.longitude], { radius: 3000 }).bindPopup(`<b>${place.name}</b><p>'Covid cases : '${place.count}</p>`)
            .setStyle({
              fillColor: '#f21818',
              color: '#f21818'
            })
        )
        i++;
      })
      setTimeout(() => {
        this.showMap = true;
        this.setLayer();
      }, 500);
    }).catch((error) => {
      console.log(JSON.stringify(error));
    });
  }

  categoryChangeMock(evtObj) {
    this.category = evtObj.detail.value;
    if (this.category === this.categories[0]) {
      this.loadReadZonesMock();
    } else if (this.category === this.categories[1]) {
      this.loadGoogleMapMock(this.dataService.hospitalsMock);
    } else if (this.category === this.categories[2]) {
      this.loadGoogleMapMock(this.dataService.groceryStoresMock);
    } else if (this.category === this.categories[3]) {
      this.loadGoogleMapMock(this.dataService.medicalStoresMock);
    } else if (this.category === this.categories[4]) {
      this.loadGoogleMapMock(this.dataService.charityZonesMock);
    }
  }

  private loadGoogleMapMock(places: any[]) {
    this.layers = [];
    this.geolocation.getCurrentPosition().then((resp) => {
      this.myPosition.latitude = resp.coords.latitude;
          this.myPosition.longitude = resp.coords.longitude;
          this.options.center = latLng(this.myPosition.latitude, this.myPosition.longitude);
          places.forEach(place => {
            this.addMarkerPointsMock(place);
          })
          setTimeout(() => {
            this.showMap = true;
            this.setLayer();
          }, 500);
    }).catch((error) => {
      console.log(JSON.stringify(error));
    });
  }

  private addMarkerPointsMock(place) {
    this.layers.push(
      marker([place.latitude, place.longitude]).bindPopup(`<b>${place.name} <span style="color:green;">(Open)</span></b><p>${place.address}</p>`)
    )
  }

}
