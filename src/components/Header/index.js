import React from 'react';
import PropTypes from 'prop-types';
import { PAGE_PATHS } from 'services/constants';
import { KeyedListMapper } from 'core';
import {
  Container,
  StyledLink,
  StyledLogo,
  Arrow,
  UserContainer,
} from './styles';

const BUTTONS = [
  {
    accent: true,
    destination: PAGE_PATHS.QUOTE,
    icon: 'plusSquare',
    label: 'Get a Quote',
  },
  {
    destination: PAGE_PATHS.TRACKING,
    icon: 'tracking',
    label: 'Tracking',
  },
  {
    destination: PAGE_PATHS.BILLING,
    icon: 'billing',
    label: 'Billing',
  },
  {
    destination: PAGE_PATHS.ACCOUNT,
    icon: 'person',
    label: 'Account',
  },
  {
    destination: PAGE_PATHS.HELP,
    icon: 'help',
    label: 'Help',
  },
];

export default function Header(props) {
  const { className, currentPath, user } = props;
  return (
    <Container className={className}>
      <StyledLogo />
      <KeyedListMapper list={BUTTONS}>
        {(key, item) => (
          <StyledLink
            accent={item.accent}
            icon={item.icon}
            isSelected={item.destination === currentPath}
            to={item.destination}
          >
            {item.label}
          </StyledLink>
        )}
      </KeyedListMapper>
      {user && (
        <UserContainer>
          {`${user.firstName} ${user.lastName}`}
          <Arrow />
        </UserContainer>
      )}
    </Container>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  currentPath: PropTypes.string.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }),
};

Header.defaultProps = {
  className: undefined,
  user: undefined,
};
