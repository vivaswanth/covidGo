import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";


/**
 * @description
 * @class
 */
@Injectable()
export class DataFetchService {

  public headers = new HttpHeaders ({'content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  fetchCovidStatistics() {
    const promise = new Promise((resolve, reject) => {
      const url = "https://api.thevirustracker.com/free-api?global=stats";
      this.http.get(url)
      .toPromise()
      .then(
        res => {
          resolve(res);
        },
        err => {
          reject(err);
        }
      );
    });
    return promise;
  }

  fetchCountryBasedTotalStatistics() {
    const promise = new Promise((resolve, reject) => {
      const url = "https://api.thevirustracker.com/free-api?countryTotals=ALL";
      this.http.get(url)
      .toPromise()
      .then(
        res => {
          resolve(res);
        },
        err => {
          reject(err);
        }
      );
    });
    return promise;
  }

  fetchHabits() {
    let data = [
      {
        "habitId": "",
        "habitImage": "habits/fruit.svg",
        "habitTitle": "Drink More Water",
        "habitDescription": "Drinking water not only keeps you hydrated but it also removes toxic out of your body. It also said to be effective in preventing several viruses from entering into the lungs."
      },
      {
        "habitId": "",
        "habitImage": "habits/meditation.svg",
        "habitTitle": "Exercise Regularly",
        "habitDescription": "Pick an exercise routine suited to your body and daily routine. Make sure you do it regularly. it helps improving body conditions and relieves stress. Practise yoga or suryanamakar."
      },
      {
        "habitId": "",
        "habitImage": "who-tips/groceries.png",
        "habitTitle": "Buying groceries in a safe manner",
        "habitDescription": "When grocery shopping keep atleast 1 metre distance and always wear a mask. Also, try to prevent touching your face - nose, eyes and mouth. If possible sanitize your hands, the places / things you touch like baskets, covers, keys, door handles etc. frequently. Once home, wash your hands properly and also the purchased products in appropriate mannger."
      },
      {
        "habitId": "",
        "habitImage": "who-tips/handshaking.png",
        "habitTitle": "Safe Greeting",
        "habitDescription": "When meeting any person, do not shake hands or hug, instead maintain a safe distance of 1-3 metres and greet them by a namaste or nodding your head."
      },
      {
        "habitId": "",
        "habitImage": "who-tips/wash-groceries.png",
        "habitTitle": "Washing food items - vegetables",
        "habitDescription": "thoroughly wash food items before consuming, using a salt water or in a warm water. This will remove the dust and bacteria from them and can also stop the spread of virus."
      },
      {
        "habitId": "",
        "habitImage": "who-tips/mythbusters.png",
        "habitTitle": "Myth Busters",
        "habitDescription": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters"
      }
      
    ];
    return data;
  }

}
