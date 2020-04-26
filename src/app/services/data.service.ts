import { Injectable } from '@angular/core';
import { GeofenceInterface } from '../models/geofence.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public geoFences: GeofenceInterface[]
  public myPosition: {
    latitude: any;
    longitude: any;
  }
  public localities: any[] = [{ name: 'Lingampally', count: 73 }, { name: 'Banjara Hills', count: 45 }, { name: 'Gachibowli', count: 32 },
  { name: 'Jeedimetla', count: 12 }, { name: 'Secunderabad', count: 98 }, { name: 'Uppal', count: 34 }];
  public hospitals: any[] = ['Mirra Multispeciality Hospital', 'UDBHAVA HOSPITAL MIYAPUR', 'Srikara Hospitals-Miyapur', 'Pranaam Hospital'];
  public charityZones: any[] = ['Madinaguda', 'Chandanagar'];
  public groceryStores: any[] = ['More Supermarket', 'Bhavani Super Mart', 'JAITHRA SUPER MART',
    'Vijetha Super Market', 'Mahalaxmi Grocery Shop','Sri Bhavani Kirana General Store'];
  public medicalStores: any[] = ['Appolo Pharmacy', 'Sarala Medical & General Stores', 'MedPlus'];
  constructor() { }

}
