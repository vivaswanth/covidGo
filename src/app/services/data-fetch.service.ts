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

}
