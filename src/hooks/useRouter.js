import { useContext } from 'react';
import { RouteContext } from 'pages/Routes/Route';

import { parse, parseUrl } from 'query-string';

const isServer = typeof window === 'undefined';

export default function useRouter() {
  const data = useContext(RouteContext);
  const { location, history, computedMatch } = data;
  const { state } = location;
  const { params } = computedMatch || {};
  const query = isServer
    ? parseUrl(location.pathname).query
    : parse(location.search);
  const formatParams = paramData => {
    const newParams = Object.entries({ ...query, ...paramData })
      .map(param => param.join('='))
      .join('&');
    return newParams;
  };

  return [
    {
      params,
      passedState: state,
      query,
      ...data,
    },
    {
      back: history.back,
      setPath: (pathname, passedData = {}, queryParams) => {
        const search = formatParams(queryParams);
        const { pathname: previousPath } = location;
        history.push(
          {
            pathname,
            search,
          },
          {
            previousPath,
            ...passedData,
          },
        );
      },
      setQuery: paramData => {
        const { pathname } = location;
        const newParams = formatParams(paramData);
        if (newParams) {
          history.push(pathname, {
            search: newParams,
          });
        }
      },
    },
  ];
}
