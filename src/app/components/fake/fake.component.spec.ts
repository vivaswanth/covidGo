import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FakeComponent } from "./fake.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FakeComponent", () => {

  let fixture: ComponentFixture<FakeComponent>;
  let component: FakeComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FakeComponent]
    });

    fixture = TestBed.createComponent(FakeComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
