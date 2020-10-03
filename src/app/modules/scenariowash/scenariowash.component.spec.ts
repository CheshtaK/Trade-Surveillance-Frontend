import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenariowashComponent } from './scenariowash.component';

describe('ScenariowashComponent', () => {
  let component: ScenariowashComponent;
  let fixture: ComponentFixture<ScenariowashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenariowashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenariowashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
