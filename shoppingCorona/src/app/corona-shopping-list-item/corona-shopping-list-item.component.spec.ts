import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaShoppingListItemComponent } from './corona-shopping-list-item.component';

describe('CoronaShoppingListItemComponent', () => {
  let component: CoronaShoppingListItemComponent;
  let fixture: ComponentFixture<CoronaShoppingListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaShoppingListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaShoppingListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
