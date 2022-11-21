import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourappsComponent } from './yourapps.component';

describe('YourappsComponent', () => {
  let component: YourappsComponent;
  let fixture: ComponentFixture<YourappsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourappsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
