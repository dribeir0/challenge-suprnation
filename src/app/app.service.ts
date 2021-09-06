import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getValueFromExpression(expression: string) {
    try {
      expression = expression.split('sin').join('Math.sin');
      expression = expression.split('cos').join('Math.cos');
      expression = expression.split('tan').join('Math.tan');
      return new Function('return ' + expression)();
    } catch (error) {
      return false;
    }
  }
}
