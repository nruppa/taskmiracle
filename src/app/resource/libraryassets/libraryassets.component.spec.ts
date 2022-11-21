import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryassetsComponent } from './libraryassets.component';

describe('LibraryassetsComponent', () => {
  let component: LibraryassetsComponent;
  let fixture: ComponentFixture<LibraryassetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryassetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
