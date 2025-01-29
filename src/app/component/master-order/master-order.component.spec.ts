import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterOrderComponent } from './master-order.component';

describe('MasterOrderComponent', () => {
  let component: MasterOrderComponent;
  let fixture: ComponentFixture<MasterOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
