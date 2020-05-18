import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaShoppingListDetailsComponent } from './corona-shopping-list-details.component';

describe('CoronaShoppingListDetailsComponent', () => {
  let component: CoronaShoppingListDetailsComponent;
  let fixture: ComponentFixture<CoronaShoppingListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaShoppingListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaShoppingListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
