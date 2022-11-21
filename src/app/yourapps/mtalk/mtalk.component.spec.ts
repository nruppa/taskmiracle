import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtalkComponent } from './mtalk.component';

describe('MtalkComponent', () => {
  let component: MtalkComponent;
  let fixture: ComponentFixture<MtalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtalkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
