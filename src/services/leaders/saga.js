import {
  all,
  call,
  take,
  takeEvery,
  put,
  fork,
  select,
} from 'redux-saga/effects';
import {
  firebase,
  FIREBASE_COLLECTIONS,
  STORAGE_FOLDERS,
} from 'services/firebase';
import { ERROR_CODES } from '../constants';
import { LOAD_LEADERS } from './actions';

const db = firebase.firestore();

function* loadDefaults() {
  try {
    yield put({ type: LOAD_LEADERS.REQUEST });
    const snapshot = yield db
      .collection(FIREBASE_COLLECTIONS.LEADERS())
      .limit(10)
      .get();

    const { docs, size } = snapshot;
    const data = docs.map(doc => doc.data());

    yield put({
      payload: { data, lastIndex: data.length - 1, total: size },
      type: LOAD_LEADERS.RESOLVE,
    });
  } catch (e) {
    console.log(e);
    yield put({
      payload: e.code,
      type: LOAD_LEADERS.ERROR,
    });
  }
}

export default function* leadersSaga() {
  yield fork(loadDefaults);
}
