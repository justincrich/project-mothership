import { useDispatch, useSelector } from 'hooks';
import { getLeaders, isLoading } from 'services/leaders';

export default function useLeaders() {
  const dispatch = useDispatch();
  const leaders = useSelector(getLeaders);
  const loading = useSelector(isLoading);
  return [
    {
      leaders,
      loading,
    },
    {
      pageLeaders: () => {},
      queryLeaders: () => {},
    },
  ];
}
