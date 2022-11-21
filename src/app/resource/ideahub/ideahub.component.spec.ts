import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeahubComponent } from './ideahub.component';

describe('IdeahubComponent', () => {
  let component: IdeahubComponent;
  let fixture: ComponentFixture<IdeahubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeahubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeahubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
