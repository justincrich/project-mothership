import React, { createContext } from 'react';

import { Route as StandardRoute, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

export const RouteContext = createContext({});
const { Provider } = RouteContext;

function Route(props) {
  return (
    <Provider value={{ ...props }}>
      <StandardRoute {...props} />
    </Provider>
  );
}

Route.propTypes = {
  computedMatch: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(Route);
