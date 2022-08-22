import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionproductsComponent } from './sectionproducts.component';

describe('SectionproductsComponent', () => {
  let component: SectionproductsComponent;
  let fixture: ComponentFixture<SectionproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionproductsComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
