import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBComponent } from './task-b.component';

describe('TaskBComponent', () => {
  let component: TaskBComponent;
  let fixture: ComponentFixture<TaskBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
