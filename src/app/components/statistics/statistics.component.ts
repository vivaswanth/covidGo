import { Component, OnInit } from "@angular/core";
import { DataFetchService } from 'src/app/services/data-fetch.service';

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.scss"]
})

export class StatisticsComponent implements OnInit {
  
  public covidStatistics: any;

  public totalCountryData: Array<any> = [];
  public countriesList: any = [];

  public slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  
  constructor(private dataFetchService: DataFetchService) {

  }

  ngOnInit() {
    this.fetchCovidStatistics();
    this.fetchCountryBasedTotalStatistics();
  }

  public fetchCovidStatistics() {
    this.dataFetchService.fetchCovidStatistics().then((res: any) => {
      if(res) {
        this.covidStatistics = res.results[0];
      }
    });
  }

  public fetchCountryBasedTotalStatistics() {
    this.dataFetchService.fetchCountryBasedTotalStatistics().then((res: any) => {
      if(res) {
        for(let key in res.countryitems[0]) {
          if (res.countryitems[0].hasOwnProperty(key)) {
            this.totalCountryData.push(res.countryitems[0][key]); 
          }
        }
        this.totalCountryData.forEach(countryItem => {
          this.countriesList.push(countryItem.title);
        });
      }
    });
  }

  public showCountryLevelStats(event) {
    console.log(event.target.value);
    this.totalCountryData.forEach(countryItem => {
      if(countryItem.title === event.target.value) {
        this.covidStatistics = countryItem;
      }
    });
  }
}