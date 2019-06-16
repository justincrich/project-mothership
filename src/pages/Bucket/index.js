import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { PAGE_BODY } from 'style/mixins';

const Body = styled.div`
  ${PAGE_BODY}
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export default function Bucket(props) {
  const { location } = props;
  const { pathname } = location;
  return <Body>{`You're at ${pathname}`}</Body>;
}

Bucket.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
