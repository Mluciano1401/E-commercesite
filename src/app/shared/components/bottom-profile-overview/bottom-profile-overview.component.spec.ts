import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomProfileOverviewComponent } from './bottom-profile-overview.component';

describe('BottomProfileOverviewComponent', () => {
  let component: BottomProfileOverviewComponent;
  let fixture: ComponentFixture<BottomProfileOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomProfileOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomProfileOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
