/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

function Portal({ children }) {
  const base = document.getElementById('portals');
  const element = document.createElement('div');
  useEffect(() => {
    if (base) {
      base.appendChild(element);
    }
    return () => {
      if (base) {
        base.removeChild(element);
      }
    };
  }, [base]);
  return createPortal(children, element);
}

export default Portal;
