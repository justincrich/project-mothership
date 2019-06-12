import { useEffect, useRef, useCallback } from 'react';

export default function useClickBoundary(eventCallback) {
  const nodeRef = useRef(null);
  const handleClick = useCallback(
    event => {
      if (!nodeRef.current.contains(event.target)) {
        eventCallback();
      }
    },
    [eventCallback],
  );
  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);
    return () => document.removeEventListener('mousedown', handleClick, false);
  }, [handleClick]);
  return nodeRef;
}
