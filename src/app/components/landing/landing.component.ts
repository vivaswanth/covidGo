import { Component, OnInit } from "@angular/core";
import { DataFetchService } from 'src/app/services/data-fetch.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})

export class LandingComponent implements OnInit {

  public greeting;
  public covidStatistics: any;

  public slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private dataFetchService: DataFetchService, private router: Router, public modalController: ModalController) {

  }

  ngOnInit() {
    this.showGreeting();
    this.fetchCovidStatistics();
  }

  showGreeting() {
    var d = new Date();
    var time = d.getHours();

    if (time < 12) {
      this.greeting = "Good morning!";
    }
    if (time > 12 && time < 17) {
      this.greeting = "Good Afternoon!";
    }
    if (time > 17) {
      this.greeting = "Good evening!";
    }
  }

  public fetchCovidStatistics() {
    this.dataFetchService.fetchCovidStatistics().then((res: any) => {
      if(res) {
        this.covidStatistics = res.results[0];
        console.log(this.covidStatistics);
      }
    });
  }

  public redirectLiveHelpDesk() {
    window.location.replace("https://wa.me/919013151515");
  }

  public showRedZones() {
    this.router.navigate(['/home/location']);
  }

  public showFakeNews() {
    this.router.navigate(['/home/fake']);
  }

  async presentSymptomChecker() {
    window.location.replace("https://symptomate.com/diagnosis/en/#0-66");
  }
}
