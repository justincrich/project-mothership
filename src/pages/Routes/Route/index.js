import React from 'react';

import { Route as StandardRoute, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

function Route(props) {
  const { computedMatch } = props;
  const { params } = computedMatch || {};
  const { env } = params || {};
  // const [{ data }] = useEnvironment(env);
  // const [{ user, isLoading }] = useAuth();

  // useEffect(() => {
  //   if (!isLoading && !user) {
  //     history.push(`/${env}/auth`);
  //   }
  // }, [env, history, isLoading, user]);

  // useEffect(() => {
  //   if (data && data.length && !data.includes(env)) {
  //     history.push('/404');
  //   }
  // }, [data, env, history]);
  return <StandardRoute {...props} env={env} />;
}

Route.propTypes = {
  computedMatch: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(Route);
