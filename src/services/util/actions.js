export const ACTION_CONSTANTS = {
  ERROR: 'ERROR',
  REQUEST: 'REQUEST',
  RESOLVE: 'RESOLVE',
};

const actions = actionName => ({
  ERROR: `${actionName}_${ACTION_CONSTANTS.ERROR}`,
  REQUEST: `${actionName}_${ACTION_CONSTANTS.REQUEST}`,
  RESOLVE: `${actionName}_${ACTION_CONSTANTS.RESOLVE}`,
});

export default actions;
