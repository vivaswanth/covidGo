import { NO_ERRORS_SCHEMA } from "@angular/core";
import { StatisticsComponent } from "./statistics.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("StatisticsComponent", () => {

  let fixture: ComponentFixture<StatisticsComponent>;
  let component: StatisticsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [StatisticsComponent]
    });

    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
