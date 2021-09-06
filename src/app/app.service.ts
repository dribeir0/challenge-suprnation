import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getRandomNumber(): Observable<string> {
    return this.http.get<string>('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new');
  }

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
