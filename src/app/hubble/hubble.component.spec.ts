import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubbleComponent } from './hubble.component';

describe('HubbleComponent', () => {
  let component: HubbleComponent;
  let fixture: ComponentFixture<HubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HubbleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
