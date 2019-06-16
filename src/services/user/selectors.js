export const getUser = state => state.user.data;
export const isLoading = state => state.user.loading;
export const getOrgId = state => {
  const user = getUser(state) || {};
  return user.organizationId;
};
