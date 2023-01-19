import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemplComponent } from './editempl.component';

describe('EditemplComponent', () => {
  let component: EditemplComponent;
  let fixture: ComponentFixture<EditemplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditemplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditemplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
