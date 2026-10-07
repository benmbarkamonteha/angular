import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerItemCard } from './customer-item-card';

describe('CustomerItemCard', () => {
  let component: CustomerItemCard;
  let fixture: ComponentFixture<CustomerItemCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerItemCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerItemCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
