import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppService } from '../app.service';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-a',
  templateUrl: './task-a.component.html',
  styleUrls: ['./task-a.component.scss'],
})
export class TaskAComponent implements OnInit, OnDestroy {
  control = new FormControl();
  subscriptions = new Subscription();
  value = false;
  results: { expression: number; value: boolean | number }[] = [];

  constructor(private appService: AppService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.control.valueChanges.pipe(debounceTime(200)).subscribe((exp) => {
        const value = this.appService.getValueFromExpression(exp);
        this.value = value;
        this.results.push({ expression: exp, value: value });
        if (this.results.length > 5) {
          this.results.shift();
        }
        this.cd.markForCheck();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
