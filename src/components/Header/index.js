import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SITE_NAME } from 'siteConstants';
import {
  Container,
  StyledInput,
  SiteName,
  LeftBox,
  CenterBox,
  RightBox,
  ActionLink,
} from './styles';

export default function Header(props) {
  const [query] = useState(null);
  const { className, searchDisabled } = props;
  return (
    <Container className={className}>
      <LeftBox>
        <SiteName to="/">{SITE_NAME}</SiteName>
      </LeftBox>
      <CenterBox>
        {!searchDisabled && <StyledInput value={query} type="search" />}
      </CenterBox>
      <RightBox>
        <ActionLink to="/review">Submit Review</ActionLink>
        <ActionLink to="/login">Login</ActionLink>
      </RightBox>
    </Container>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  searchDisabled: PropTypes.bool,
};

Header.defaultProps = {
  className: undefined,
  searchDisabled: false,
};
