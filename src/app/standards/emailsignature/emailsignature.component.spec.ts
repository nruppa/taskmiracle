import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsignatureComponent } from './emailsignature.component';

describe('EmailsignatureComponent', () => {
  let component: EmailsignatureComponent;
  let fixture: ComponentFixture<EmailsignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailsignatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailsignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
