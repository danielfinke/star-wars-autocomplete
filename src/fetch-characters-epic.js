import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, takeUntil, tap } from 'rxjs/operators';

import { FETCH_CHARACTERS, fetchCharactersFulfilled } from './actions';

const URL_SEARCH = 'http://star-wars-characters.glitch.me/api/search/';

const fetchCharactersEpic = (action$ /*, state*/) =>
  action$.pipe(
    ofType(FETCH_CHARACTERS),
    mergeMap(({ payload }) =>
      ajax.getJSON(URL_SEARCH + payload.searchTerm).pipe(
        tap((response) => console.log(response)),
        map((response) => fetchCharactersFulfilled(response.results)),
        takeUntil(
          action$.pipe(
            ofType(FETCH_CHARACTERS),
            tap(() => console.log('cancelling')),
          ),
        ),
      ),
    ),
  );

export default fetchCharactersEpic;
