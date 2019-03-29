import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTermsComponent } from './item-terms.component';

describe('ItemTermsComponent', () => {
  let component: ItemTermsComponent;
  let fixture: ComponentFixture<ItemTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
