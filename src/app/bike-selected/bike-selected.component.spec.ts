import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeSelectedComponent } from './bike-selected.component';

describe('BikeSelectedComponent', () => {
  let component: BikeSelectedComponent;
  let fixture: ComponentFixture<BikeSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeSelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
