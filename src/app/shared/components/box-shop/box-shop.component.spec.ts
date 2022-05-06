import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxShopComponent } from './box-shop.component';

describe('BoxShopComponent', () => {
  let component: BoxShopComponent;
  let fixture: ComponentFixture<BoxShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
