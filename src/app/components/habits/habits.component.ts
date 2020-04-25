import { DataFetchService } from 'src/app/services/data-fetch.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-habits",
  templateUrl: "./habits.component.html",
  styleUrls: ["./habits.component.scss"]
})

export class HabitsComponent implements OnInit {
  
  public habits;

  constructor(private dataFetchService: DataFetchService) { 

  }

  ngOnInit() {
    this.habits = this.dataFetchService.fetchHabits();
  }
}
