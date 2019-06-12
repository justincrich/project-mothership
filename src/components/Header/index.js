import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { KeyedListMapper } from 'core';
import {
  Container,
  LeftBox,
  CenterBox,
  RightBox,
  StyledButton,
  StyledLogo,
  Arrow,
  UserContainer,
} from './styles';

const BUTTONS = [
  {
    accent: true,
    icon: 'plusSquare',
    label: 'Get a Quote',
  },
  {
    icon: 'tracking',
    label: 'Tracking',
    selected: true,
  },
  {
    icon: 'billing',
    label: 'Billing',
  },
  {
    icon: 'person',
    label: 'Account',
  },
  {
    icon: 'help',
    label: 'Help',
  },
];

export default function Header(props) {
  const [query] = useState(null);
  const { className } = props;
  return (
    <Container className={className}>
      <StyledLogo />
      <KeyedListMapper list={BUTTONS}>
        {(key, item) => (
          <StyledButton
            accent={item.accent}
            icon={item.icon}
            isSelected={item.selected}
          >
            {item.label}
          </StyledButton>
        )}
      </KeyedListMapper>
      <UserContainer>
        <Arrow />
      </UserContainer>
    </Container>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: undefined,
};
