/* eslint-disable global-require */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ICON_DIMENSION_SM } from 'style/constants';
import * as Icons from './svgs';

export default function Icon(props) {
  const { className, name, ...restProps } = props;
  const Component = Icons[name];

  if (!Component) {
    return null;
  }

  const StyledIcon = styled(Component)`
    stroke: ${props => props.theme.colors.iconColor};

    width: ${ICON_DIMENSION_SM};
    height: ${ICON_DIMENSION_SM};
    stroke-width: 2;
  `;
  return <StyledIcon {...restProps} className={className} />;
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  className: undefined,
};
