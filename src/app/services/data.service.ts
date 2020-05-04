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

  public localitiesMock: any[] = [{ name: 'Sun City, Bandlaguda', count: 73, latitude: 17.3631, longitude: 78.3965}, { name: 'Banjara Hills', count: 45, latitude:17.4169, longitude:78.4387 }, { name: 'Gachibowli', count: 32, latitude: 17.4401, longitude: 78.3489 },
  { name: 'Jeedimetla', count: 12, latitude: 17.5197, longitude: 78.4586 }, { name: 'Mehdipatnam', count: 98, latitude: 17.3958, longitude: 78.4312 }, { name: 'Charminar', count: 34, latitude: 17.3616, longitude: 78.4747 }];
  public hospitalsMock: any[] = [{name: 'Sun City Hospital', address: 'H.No 7, 10/71, Chevella Rd, Hydershakote, Bandlahuda Jaagir, Hyderabad, Telangana 500008', latitude: 17.364080, longitude: 78.395770}, {name:'Shadan Hospital', address: 'Chevella Rd, near PBEL City, Peeranchuruvu, Hyderabad, Telangana 500086', latitude:17.357090, longitude: 78.383500}, {name:'Renova Hospital', address: 'Langar House Rd, opposite Bapu Ghat, Bapu Nagar, Langar Houz, Hyderabad, Telangana 500008', latitude: 17.327460, longitude: 78.564560}];
  public charityZonesMock: any[] = [{name: 'Gudimalkapur', address: 'Mehdipatnam, Hyderabad, Telangana 500264', latitude: 17.3788, longitude: 78.4374}, {name: 'Gachibowli Stadium', address: 'Gachibowli, Hyderabad, Telangana 500032', latitude: 17.4461, longitude: 78.3441}];
  public groceryStoresMock: any[] = [{name: 'More Supermarket', address:'Plot No.73, Shivam Arcade, opp. Sun City Road, Hydershakote, Rajendranagar mandal, Hyderabad, Telangana 500008', latitude: 17.364110, longitude: 78.396260}, {name: 'Heritage SuperMarket', address: '119, Chevella Rd, Padmasri Estates, Hyder Shah Kote, Bandlaguda Jagir, Hyderabad, Telangana 500091', latitude: 17.371300, longitude: 78.408250}];



  constructor() { }

}
