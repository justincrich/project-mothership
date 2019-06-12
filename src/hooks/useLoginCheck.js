import { useEffect } from 'react';
import { firebase } from 'services/firebase';

export default function useLoginCheck() {
  const redirect = data => {
    if (!data) {
      // const { environment } = Router.query;
      // const dir = `/${environment}/${PAGE_DIRECTORY.AUTH}`;
      // Router.replace(dir);
    }
  };

  useEffect(() => {
    if (firebase) {
      firebase.auth().onAuthStateChanged(redirect);
    }
  }, []);
}
