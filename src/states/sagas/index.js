import {fork, all} from 'redux-saga/effects'
import appSaga from '../modules/app/saga.js';

export default function* sagas() {
  yield all([
    fork(appSaga),
  ]);
}
