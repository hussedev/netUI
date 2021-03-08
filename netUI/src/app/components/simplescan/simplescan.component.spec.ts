import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplescanComponent } from './simplescan.component';

describe('SimplescanComponent', () => {
  let component: SimplescanComponent;
  let fixture: ComponentFixture<SimplescanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplescanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplescanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
