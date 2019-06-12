import { actions } from 'services/util';

export const LOAD_USER = actions('LOAD_USER');

export const userActions = {
  load: userId => ({ payload: userId, type: LOAD_USER.REQUEST }),
};
