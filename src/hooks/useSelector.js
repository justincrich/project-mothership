import { StoreContext } from 'services';
import { useContext, useState, useEffect, useCallback } from 'react';

export default function useSelector(selector) {
  const { subscribe, getState } = useContext(StoreContext);
  const select = useCallback(() => selector(getState()), [getState, selector]);
  const initial = select();
  const [value, update] = useState(initial);

  // NOTE: passing value so I can consistently get the current refrence
  // for update in the listener function on each render
  useEffect(() => {
    const unsubscribe = subscribe(() => {
      const next = select();
      if (JSON.stringify(next) !== JSON.stringify(value)) {
        update(next);
      }
    });
    return () => unsubscribe();
  }, [select, subscribe, value]);

  return value;
}
