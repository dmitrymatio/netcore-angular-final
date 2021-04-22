import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmitryComponent } from './dmitry.component';

describe('DmitryComponent', () => {
  let component: DmitryComponent;
  let fixture: ComponentFixture<DmitryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmitryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmitryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
