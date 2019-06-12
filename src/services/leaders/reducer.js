import { LOAD_LEADERS } from './actions';

const initialState = {
  data: [],
  error: null,
  lastIndex: null,
  loading: false,
  total: null,
};

export default function(state = initialState, action) {
  const { payload, type } = action;

  const loadingState = {
    ...state,
    error: null,
    loading: true,
  };

  switch (type) {
    case LOAD_LEADERS.REQUEST:
      return loadingState;
    case LOAD_LEADERS.RESOLVE: {
      const { data, lastIndex, total } = payload;
      return {
        ...state,
        data,
        lastIndex,
        loading: false,
        total,
      };
    }
    case LOAD_LEADERS.ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
}
