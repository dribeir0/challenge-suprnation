import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-task-d',
  templateUrl: './task-d.component.html',
  styleUrls: ['./task-d.component.scss']
})
export class TaskDComponent implements OnInit, OnDestroy {

  value = '';
  subscriptions = new Subscription();

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  insertNumber(val: string) {
    if(!this.value) {
      this.value = '';
    }
    this.value = `${this.value}${val}`;
  }

  getResult() {
    this.value = this.appService.getValueFromExpression(this.value);
  }

  getRandomNumber() {
    this.appService.getRandomNumber().pipe().subscribe(val => this.insertNumber(val))
  }


}
