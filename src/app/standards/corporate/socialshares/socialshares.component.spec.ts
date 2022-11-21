import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsharesComponent } from './socialshares.component';

describe('SocialsharesComponent', () => {
  let component: SocialsharesComponent;
  let fixture: ComponentFixture<SocialsharesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialsharesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialsharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
