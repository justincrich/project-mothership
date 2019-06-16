import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ACTION_BUTTON, ACTION_BUTTON_LITE } from 'style/mixins';
import { BORDER_RADIUS } from 'style/constants';
import { rgba } from 'style/colors';
import * as Icons from 'assets/icons';

const Container = styled.button`
  ${props => (props.isLite ? ACTION_BUTTON_LITE : ACTION_BUTTON)};
  border-radius: ${BORDER_RADIUS};
  background-color: ${props =>
    props.isSelected ? rgba(props.theme.colors.white, 0.2) : 'transparent'};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  align-content: center;
  height: 31px;
  padding: 0;
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

export default function Button(props) {
  const { accent, children, className, icon, isLite, isSelected } = props;
  const IconComponent = Icons[icon];
  return (
    <Container
      accent={accent}
      className={className}
      isLite={isLite}
      isSelected={isSelected}
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

Button.propTypes = {
  accent: PropTypes.bool,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
  isLite: PropTypes.bool,
  isSelected: PropTypes.bool,
};

Button.defaultProps = {
  accent: false,
  className: undefined,
  icon: undefined,
  isLite: false,
  isSelected: false,
};
