import React, { useContext } from 'react';
import styles from 'styled-components';
import { StoreContext } from 'services';
import { Routes } from 'pages';
import { Provider } from 'react-redux';
import { Grommet } from 'grommet';
import { themes, GlobalStyle } from './style';

const Container = styles(Grommet)`
  height: 100%;
`;
function App() {
  const store = useContext(StoreContext);
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
