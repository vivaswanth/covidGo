import { NO_ERRORS_SCHEMA } from "@angular/core";
import { WelcomeComponent } from "./welcome.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("WelcomeComponent", () => {

  let fixture: ComponentFixture<WelcomeComponent>;
  let component: WelcomeComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [WelcomeComponent]
    });

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
