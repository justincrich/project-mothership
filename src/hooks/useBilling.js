import { useEffect, useReducer } from 'react';
import produce from 'immer';
import { DOMAIN, API_PATHS } from 'services/constants';
import { actions } from 'services/util';
import axios from 'axios';

// NOTE: Not putting billing in central state because it holds
// sensitive data and I'm assuming we will only use it on this page

const LOAD_BILLING = actions('LOAD_BILLING');
const CLEAR_BILLING = actions('CLEAR_BILLING');

const initialState = {
  balance: null,
  bankAccounts: [],
  cards: [],
  error: null,
  lineItems: [],
  loading: false,
};

function reducer(state, action) {
  const { payload, type } = action;
  const ERROR = { ...state, error: payload, loading: false };
  const LOADING = { ...state, loading: true };
  switch (type) {
    case CLEAR_BILLING.REQUEST:
      return initialState;
    case LOAD_BILLING.RESOLVE:
      return produce(state, draft => {
        draft.loading = false;
        draft.error = null;
        draft.balance = Number(payload.balance);
        draft.cards = payload.paymentMethods.cards || [];
        draft.bankAccounts = payload.paymentMethods.bankAccounts || [];
        draft.lineItems = Object.values(payload.items) || [];
      });
    case LOAD_BILLING.REQUEST:
      return LOADING;
    case LOAD_BILLING.ERROR:
      return ERROR;
    default:
      return { ...state };
  }
}

export default function useBilling(organizationId) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const fetchBilling = async () => {
      const url = `${DOMAIN + API_PATHS.ORGANIZATION}/${organizationId}${
        API_PATHS.BILLING
      }`;
      // NOTE: modularize error handling codes in future iterations
      try {
        dispatch({ type: LOAD_BILLING.LOADING });
        const res = await axios.get(url);

        if (res.status === 200 && res.data) {
          dispatch({ payload: res.data, type: LOAD_BILLING.RESOLVE });
        } else if (!res.data || (res.data && !res.data.user)) {
          dispatch({ payload: 'System Error', type: LOAD_BILLING.ERROR });
        }
      } catch (e) {
        if (e.response) {
          if (e.response.status === 401) {
            dispatch({ payload: 'Unauthorized', type: LOAD_BILLING.ERROR });
          } else if (e.response.status === 403) {
            dispatch({ payload: 'Forbidden', type: LOAD_BILLING.ERROR });
          } else {
            dispatch({ payload: 'Server Error', type: LOAD_BILLING.ERROR });
          }
        } else {
          dispatch({ payload: 'Server Error', type: LOAD_BILLING.ERROR });
        }
      }
    };
    if (organizationId) {
      fetchBilling(organizationId);
    } else {
      dispatch({ type: CLEAR_BILLING.REQUEST });
    }

    return () => dispatch({ type: CLEAR_BILLING.REQUEST });
  }, [organizationId]);
  const { balance, bankAccounts, cards, error, lineItems, loading } = state;
  return [
    {
      balance,
      bankAccounts,
      cards,
      error,
      lineItems,
      loading,
    },
    {
      setPaymentMethod: newMethod => {
        console.log('New payent method ', newMethod);
      },
    },
  ];
}
