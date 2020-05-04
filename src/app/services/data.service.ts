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
  public localities: any[] = [{ name: 'Sun City, Bandlaguda Jagir', count: 73 }, { name: 'Lingampally', count: 45 }, { name: 'Gachibowli', count: 32 },
  { name: 'Jeedimetla', count: 12 }, { name: 'Secunderabad', count: 98 }, { name: 'Kukatpally', count: 34 }];
  public hospitals: any[] = ['Sun City Hospital', 'Shadan Hospital', 'Renova Hospital'];
  public charityZones: any[] = ['Gudimalkapur', 'Gachibowli Stadium'];
  public groceryStores: any[] = ['More Supermarket', 'Heritage SuperMarket', 'SN Store (Stationery & Kirana Genral Store)',
    'Big Value Super Market', 'Jagdamba Kirana Store'];
  public medicalStores: any[] = ['Shree Venkateshwara Medical & General Stores', 'Vaishnavi Medical and General Store', 'Bhavani Medical & Genaral Stores', 'Balaji Medicals', 'Vijaya Medicals & General Stores'];

  public localitiesMock: any[] = [{ name: 'Sun City, Bandlaguda Jagir', count: 73, latitude: 17.3631344, longitude: 78.396519 }, { name: 'Lingampally', count: 45, latitude: 17.4836979, longitude: 78.3158338 }, { name: 'Gachibowli', count: 32, latitude: 17.5196968, longitude: 78.4586419 },
  { name: 'Jeedimetla', count: 12, latitude: 17.4400802, longitude: 78.3489168 }, { name: 'Secunderabad', count: 98, latitude: 17.439929499999998, longitude: 78.4982741 }, { name: 'Kukatpally', count: 34, latitude: 17.4875418, longitude: 78.3953462 }];
  public hospitalsMock: any[] = [{ name: 'Sun City Hospital', address: 'H.No 7, 10/71, Chevella Rd, Hydershakote, Bandlahuda Jaagir, Hyderabad, Telangana 500008', latitude: 17.365358399999998, longitude: 78.3980031 }, { name: 'Shadan Hospital', address: 'Chevella Rd, near PBEL City, Peeranchuruvu, Hyderabad, Telangana 500086', latitude: 17.3518543, longitude: 78.37360389999999 }, { name: 'Renova Hospital', address: 'Langar House Rd, opposite Bapu Ghat, Bapu Nagar, Langar Houz, Hyderabad, Telangana 500008', latitude: 17.3732716, longitude: 78.41446719999999}];
  public charityZonesMock: any[] = [{ name: 'Gudimalkapur', address: 'Mehdipatnam, Hyderabad, Telangana 500264', latitude: 17.3787821, longitude: 78.4374024 }, { name: 'Gachibowli Stadium', address: 'Gachibowli, Hyderabad, Telangana 500032', latitude: 17.4461331, longitude: 78.34413889999999}];
  public groceryStoresMock: any[] = [{ name: 'More Supermarket', address: 'Plot No.73, Shivam Arcade, opp. Sun City Road, Hydershakote, Rajendranagar mandal, Hyderabad, Telangana 500008', latitude: 17.3648746, longitude: 78.395365 }, { name: 'Heritage SuperMarket', address: '119, Chevella Rd, Padmasri Estates, Hyder Shah Kote, Bandlaguda Jagir, Hyderabad, Telangana 500091', latitude: 17.3620999, longitude: 78.3935948 },
  { name: 'SN Stores (Stationery & Kirana Genral Store)', address: 'Suncity Rd, Sun City, Bandlaguda Jagir, Hyderabad, Telangana 500091', latitude: 17.363980299999998, longitude: 78.3963062 }, { name: 'Big Value Super Market', address: 'Raghuram Nagar-Sun City, Bandlaguda Jagir, Hyderabad, Ranga Reddy, Telangana, 500091', latitude: 17.3614298, longitude: 78.3950955}, {name:'Jagdamba Kirana Store', address: 'Prime Furniture (Hydershakote), Bandlaguda Jagir, Hyderabad, Ranga Reddy, Telangana, 500091', latitude: 17.366820699999998, longitude: 78.39902169999999}];
  public medicalStoresMock: any[] = [{name:'Shree Venkateshwara Medical & General Stores', address: 'Chevella Road, Bandlaguda Jagir, Hyderabad, Ranga Reddy, Telangana, 500031', latitude:17.363833, longitude:78.39465},
  {name:'Vaishnavi Medical and General Store', address:'Hydershakote, Bandlaguda Jagir, Hyderabad, Ranga Reddy, Telangana, 500091', latitude:17.364038, longitude:78.393166},
  {name:'Bhavani Medical & Genaral Stores', address:'ENR Complex, Chevella Road, Bandlaguda Jagir, Hyderabad, Ranga Reddy, Telangana, 500091', latitude:17.3650548, longitude:78.39542639999999},
  {name:'Balaji Medicals', address:'Sun City, Bandlaguda Jagir, Hyderabad, Ranga Reddy, Telangana, 500091', latitude: 17.3649296, longitude:78.3962502},
  {name: 'Vijaya Medicals & General Stores', address: '1, Chevella Road, Bandlaguda Jagir, Hyderabad, Ranga Reddy, Telangana, 500093', latitude:17.359389099999998, longitude:78.3873316}]


  constructor() { }

}
