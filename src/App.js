/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { useUsers } from 'hooks';
import styles from 'styled-components';
import { StoreContext } from 'services';
import { Routes } from 'pages';
import { Provider } from 'react-redux';
import { Grommet } from 'grommet';
import { themes, GlobalStyle } from './style';

const Container = styles(Grommet)`
  height: 100%;
`;
const USER_ID = process.env.REACT_APP_USER_ID;
function App() {
  const store = useContext(StoreContext);
  const [, { fetchUser }] = useUsers();
  useEffect(() => {
    // TODO: replace with either a HOC or hook that manages authentication
    // NOTE: placed here because I don't want to refresh the userId each time
    // we switch pages
    fetchUser(USER_ID);
  }, []);
  return (
    <Provider store={store}>
      <Container theme={themes.default}>
        <GlobalStyle />
        <div id="portals" />
        <Routes />
      </Container>
    </Provider>
  );
}

export default App;
