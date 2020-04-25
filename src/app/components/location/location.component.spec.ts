import { NO_ERRORS_SCHEMA } from "@angular/core";
import { LocationComponent } from "./location.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("LocationComponent", () => {

  let fixture: ComponentFixture<LocationComponent>;
  let component: LocationComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [LocationComponent]
    });

    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
