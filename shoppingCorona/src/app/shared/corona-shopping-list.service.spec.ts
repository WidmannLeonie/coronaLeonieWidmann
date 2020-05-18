import { TestBed } from '@angular/core/testing';

import { CoronaShoppingListService } from './corona-shopping-list.service';

describe('CoronaShoppingListService', () => {
  let service: CoronaShoppingListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaShoppingListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
