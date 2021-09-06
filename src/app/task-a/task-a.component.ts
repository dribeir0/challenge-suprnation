import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppService } from '../app.service';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-a',
  templateUrl: './task-a.component.html',
  styleUrls: ['./task-a.component.scss']
})
export class TaskAComponent implements OnInit, OnDestroy {

  control = new FormControl();
  subscriptions = new Subscription();
  isValid = false;

  constructor(private appService: AppService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.subscriptions.add(this.control.valueChanges.pipe(debounceTime(200)).subscribe((exp) => {
      this.isValid = this.appService.getValueFromExpression(exp) as boolean;
      this.cd.markForCheck();
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
