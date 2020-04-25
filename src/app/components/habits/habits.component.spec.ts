import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HabitsComponent } from "./habits.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("HabitsComponent", () => {

  let fixture: ComponentFixture<HabitsComponent>;
  let component: HabitsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [HabitsComponent]
    });

    fixture = TestBed.createComponent(HabitsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
