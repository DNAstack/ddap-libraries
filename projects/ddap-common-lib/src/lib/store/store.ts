import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

export class Store<T> {

  public readonly state$: Observable<T>;
  private _state$: BehaviorSubject<T>;

  protected constructor(initialState: T) {
    this._state$ = new BehaviorSubject(initialState);
    this.state$ = this._state$.asObservable()
      .pipe(
        filter((state: T) => {
          return state !== null;
        })
      );
  }

  get state(): T {
    return this._state$.getValue();
  }

  public setState(nextState: T) {
    this._state$.next(nextState);
  }

}
