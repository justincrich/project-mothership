import { userActions, getUser, isLoading, getOrgId } from 'services/user';
import { useSelector, useDispatch } from 'hooks';

export default function useUsers() {
  const { load } = userActions;
  const user = useSelector(getUser);
  const loading = useSelector(isLoading);
  const organizationId = useSelector(getOrgId);
  const dispatch = useDispatch();
  return [
    {
      loading,
      organizationId,
      user,
    },
    {
      fetchUser: userId => dispatch(load(userId)),
    },
  ];
}
