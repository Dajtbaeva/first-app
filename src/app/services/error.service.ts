// ng g s services/error --skip-tests
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  error$ = new Subject<string>();
  /* можем динамически триггерить изменения данных в ошибке */

  handle(message: string) {
    this.error$.next(message);
    /* уведомляем всех подписчиков об ошибке, с помощью метода некст */
  }

  clear() {
    this.error$.next('');
  }
}
