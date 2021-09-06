import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDComponent } from './task-d.component';

describe('TaskDComponent', () => {
  let component: TaskDComponent;
  let fixture: ComponentFixture<TaskDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
