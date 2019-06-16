import { all, takeEvery, put } from 'redux-saga/effects';
import { DOMAIN, API_PATHS } from 'services/constants';
import axios from 'axios';
import { LOAD_USER } from './actions';

function* loadUserSaga(action) {
  const { payload: userId } = action;
  const url = `${DOMAIN + API_PATHS.USER}/${userId}`;
  try {
    const res = yield axios.get(url);
    if (res.status === 200 && res.data && res.data.user) {
      yield put({ payload: res.data.user, type: LOAD_USER.RESOLVE });
    } else if (!res.data || (res.data && !res.data.user)) {
      yield put({ payload: 'Service Error', type: LOAD_USER.ERROR });
    }
  } catch (e) {
    if (e.response) {
      if (e.response.status === 401) {
        yield put({ payload: 'Unauthorized', type: LOAD_USER.ERROR });
      } else if (e.response.status === 403) {
        yield put({ payload: 'Forbidden', type: LOAD_USER.ERROR });
      } else {
        yield put({ payload: 'Server Error', type: LOAD_USER.ERROR });
      }
    } else {
      yield put({ payload: e.message, type: LOAD_USER.ERROR });
    }
  }
}

export default function* userSaga() {
  yield all([takeEvery(LOAD_USER.REQUEST, loadUserSaga)]);
}
