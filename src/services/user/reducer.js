import { LOAD_USER } from './actions';

const initialState = {
  data: null,
  error: null,
  loading: false,
};

export default function userReducer(state = initialState, action) {
  const { payload, type } = action;
  const ERROR = { ...state, error: payload, loading: false };
  const LOADING = { ...state, loading: true };
  switch (type) {
    case LOAD_USER.RESOLVE:
      return { ...state, data: payload, error: false, loading: false };
    case LOAD_USER.REQUEST:
      return LOADING;
    case LOAD_USER.ERROR:
      return ERROR;
    default:
      return { ...state };
  }
}
