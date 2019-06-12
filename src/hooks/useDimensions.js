import { useRef, useEffect, useState } from 'react';

export default function useDimensions(trigger) {
  const itemRef = useRef(null);
  const [dimensions, setDimensions] = useState(null);
  useEffect(() => {
    if (itemRef.current) {
      setDimensions(itemRef.current.getBoundingClientRect());
    }
  }, [itemRef, trigger]);

  return [dimensions, itemRef];
}
