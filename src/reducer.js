import { combineReducers } from 'redux';

import { FETCH_CHARACTERS_FULFILLED } from './actions';

const charactersReducer = (characters = [], { type, payload }) => {
  if (type === FETCH_CHARACTERS_FULFILLED) {
    return payload.characters;
  }

  return characters;
};

export default combineReducers({
  characters: charactersReducer,
});
