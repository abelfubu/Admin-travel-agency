import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private isLoading$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  showLoading(): void {
    this.isLoading$.next(true);
  }

  hideLoading(): void {
    this.isLoading$.next(false);
  }

  get isLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }
}
