import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  isFetching: false,
  errorMessage: false,
  token: null
});

export default function login(state=initialState, action={}){
  const { payload = {}, type } = action;

  switch (type) {
    case types.FETCH_TOKEN:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.TOKEN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: payload.message || false,
        token: payload.token
      });
    case types.TOKEN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: 'Something went wrong while login in'
      });

    default:
      return state;
  }
}
