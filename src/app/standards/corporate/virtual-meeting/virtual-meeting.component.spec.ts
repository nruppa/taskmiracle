import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualMeetingComponent } from './virtual-meeting.component';

describe('VirtualMeetingComponent', () => {
  let component: VirtualMeetingComponent;
  let fixture: ComponentFixture<VirtualMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualMeetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
