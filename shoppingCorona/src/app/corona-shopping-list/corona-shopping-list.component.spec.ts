import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaShoppingListComponent } from './corona-shopping-list.component';

describe('CoronaShoppingListComponent', () => {
  let component: CoronaShoppingListComponent;
  let fixture: ComponentFixture<CoronaShoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaShoppingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
