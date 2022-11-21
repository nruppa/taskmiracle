import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialpolicyComponent } from './socialpolicy.component';

describe('SocialpolicyComponent', () => {
  let component: SocialpolicyComponent;
  let fixture: ComponentFixture<SocialpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialpolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
