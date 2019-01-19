import { Injectable } from '@angular/core';
import { select } from '@ngrx/store';
import { first, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreHelperService {
  constructor() {}

  /**
   * Wait for selector to return data and then combine it with the payload
   * @param store$ Store to select from
   * @param selector Store selector
   * @param payload action payload from triggering action
   */
  waitForAsyncSelector(store$, selector, payload) {
    return store$.pipe(
      select(selector),
      /**
       * Get the first result from the selector where the result is not false i.e.
       * get the first actual data
       */
      first((result) => !!result),
      /**
       * Combine the data with the payload of the triggering action.
       * We may need the data from the action as well.
       */
      withLatestFrom(of(payload))
    );
  }
}
