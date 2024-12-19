import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorComponent } from './donator.component';

describe('DonatorComponent', () => {
  let component: DonatorComponent;
  let fixture: ComponentFixture<DonatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
