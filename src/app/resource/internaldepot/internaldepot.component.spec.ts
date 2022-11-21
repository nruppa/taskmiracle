import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaldepotComponent } from './internaldepot.component';

describe('InternaldepotComponent', () => {
  let component: InternaldepotComponent;
  let fixture: ComponentFixture<InternaldepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternaldepotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternaldepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
