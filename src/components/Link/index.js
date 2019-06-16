import React from 'react';
import { Link as RRLink } from 'react-router-dom';
import styled from 'styled-components';
import { LINK_LITE, LINK } from 'style/mixins';
import { BORDER_RADIUS } from 'style/constants';
import { rgba } from 'style/colors';
import PropTypes from 'prop-types';
import * as Icons from 'assets/icons';

const Container = styled(RRLink)`
  ${props => (props.isLite ? LINK_LITE : LINK)};
  border-radius: ${BORDER_RADIUS};
  background-color: ${props =>
    props.isSelected ? rgba(props.theme.colors.white, 0.2) : 'transparent'};
  display: flex;
  padding: 0 12px;
  flex-flow: row nowrap;
  align-items: center;
  align-content: center;
  height: 31px;
  ${props =>
    props.accent &&
    `
    color: ${
      props.isLite ? props.theme.colors.yellow : props.theme.colors.accent
    };
  `}
`;

const IconContainer = styled.div`
  & svg {
    border-radius: ${BORDER_RADIUS};
    border: 0;
    height: 17px;
  }

  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export default function Link(props) {
  const { accent, children, className, icon, isLite, isSelected, to } = props;
  const IconComponent = Icons[icon];
  return (
    <Container
      accent={accent}
      className={className}
      isLite={isLite}
      isSelected={isSelected}
      to={to}
    >
      {icon && (
        <IconContainer icon={icon}>
          <IconComponent />
        </IconContainer>
      )}
      {children}
    </Container>
  );
}

Link.propTypes = {
  accent: PropTypes.bool,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
  isLite: PropTypes.bool,
  isSelected: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

Link.defaultProps = {
  accent: false,
  className: undefined,
  icon: undefined,
  isLite: false,
  isSelected: false,
};
