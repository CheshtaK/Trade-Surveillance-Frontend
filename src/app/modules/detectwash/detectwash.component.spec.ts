import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectwashComponent } from './detectwash.component';

describe('DetectwashComponent', () => {
  let component: DetectwashComponent;
  let fixture: ComponentFixture<DetectwashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectwashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectwashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
