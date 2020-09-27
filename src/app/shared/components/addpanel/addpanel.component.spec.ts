import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpanelComponent } from './addpanel.component';

describe('AddpanelComponent', () => {
  let component: AddpanelComponent;
  let fixture: ComponentFixture<AddpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
