import { DataFetchService } from "./data-fetch.service";
import { TestBed } from "@angular/core/testing";

describe("DataFetchService", () => {

  let service: DataFetchService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataFetchService
      ]
    });
    service = TestBed.get(DataFetchService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
