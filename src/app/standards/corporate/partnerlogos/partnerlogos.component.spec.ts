import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerlogosComponent } from './partnerlogos.component';

describe('PartnerlogosComponent', () => {
  let component: PartnerlogosComponent;
  let fixture: ComponentFixture<PartnerlogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerlogosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerlogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
