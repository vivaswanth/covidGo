import { Injectable } from '@angular/core';
import { GeofenceInterface } from '../models/geofence.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public geoFences:GeofenceInterface[]
  public myPosition:{
    latitude:any;
    longitude:any;
  }
  public places:string[] = ['Kukatpally','Gachibowli','Secunderabad','Nampally'];

  constructor() { }

}
