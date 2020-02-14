import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaComponentLibraryComponent } from './java-component-library.component';

describe('JavaComponentLibraryComponent', () => {
  let component: JavaComponentLibraryComponent;
  let fixture: ComponentFixture<JavaComponentLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaComponentLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaComponentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
