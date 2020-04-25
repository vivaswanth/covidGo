import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Geofence } from '@ionic-native/geofence/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { tileLayer, latLng, circle, marker, MapOptions, Icon, icon } from 'leaflet';
import { coords } from '../../models/geofence.interface';
import { DataService } from '../../services/data.service';

declare var google;

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
      map: boolean;
      center;
      
      constructor(
        private dataService : DataService, private geofence: Geofence, private geolocation: Geolocation
      ) { }

      async ngOnInit() {
        this.map = false;
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
        

        this.geolocation.getCurrentPosition().then((resp) => {
          this.dataService.myPosition = {latitude : resp.coords.latitude, longitude: resp.coords.longitude}
          this.addGeofence(1, 123-323, resp.coords.latitude, resp.coords.longitude, 'Hyderabad', 'Be careful');
          this.myPosition.latitude = this.dataService.myPosition.latitude;
        this.myPosition.longitude = this.dataService.myPosition.longitude;
        this.options.center = latLng(this.myPosition.latitude, this.myPosition.longitude);

        this.dataService.geoFences.forEach(fence => {
          this.layers.push(
            circle([fence.latitude, fence.longitude], { radius: fence.radius }).bindPopup(`<b>${fence.notification.title}</b><p>${fence.notification.text}</p>`),
            marker([fence.latitude, fence.longitude])
            )
        });
         }).catch((error) => {
           console.log(JSON.stringify(error));
         });
      }

      private addGeofence(id, idx, lat, lng, place, desc) {
        let fence = {
          id: id,
          latitude: lat,
          longitude: lng,
          radius: 50000,
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
            alert('Geofence added');
            this.dataService.geoFences = [{id: fence.id,
              latitude: fence.latitude,
              longitude: fence.longitude,
              radius: fence.radius,
              transitionType: fence.transitionType,
              notification: fence.notification}]
           },
           (err) => alert('Geofence failed to add' + JSON.stringify(err))
         );
    
         this.geofence.onTransitionReceived().subscribe((res) => {
          alert('Notified');
        });

        setTimeout(() => {
          this.map = true;
          this.setLayer();
        }, 500);
      }

      setLayer(): void{
        this.layers.push(marker([this.myPosition.latitude, this.myPosition.longitude], {
          autoPan: true,
          icon: icon({
            iconSize: [ 18, 18 ],
            //iconAnchor: [ 10, 10],
            iconUrl: 'assets/marker.png',
            //shadowUrl: 'assets/marker-shadow.png'
        })
        }), circle([this.myPosition.latitude, this.myPosition.longitude], { radius: 20}).setStyle({
          fillColor: '#f21818',
          color: '#f21818'
        })
        );
      }

  }
