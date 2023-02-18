import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isvisible$ = new BehaviorSubject<boolean>(false);
  open() {
    this.isvisible$.next(true);
  }
  close() {
    this.isvisible$.next(false);
  }
}
