import { StoreContext } from 'services';
import { useContext } from 'react';

export default function useDispatch() {
  const { dispatch } = useContext(StoreContext);
  return dispatch;
}
