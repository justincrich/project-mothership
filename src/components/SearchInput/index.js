import styled from 'styled-components';
import { SPACING_SMALL } from 'style/constants';
import TextInput from 'components/TextInput';
import React from 'react';
import Icon from 'components/Icon';
import PropTypes from 'prop-types';

export const Container = styled.div`
  display: flex;
  padding: 0 ${SPACING_SMALL};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 25px;
  align-items: center;
`;

export const StyledInput = styled(TextInput).attrs({
  border: false,
})``;

export default function SearchInput(props) {
  const { className, ...inputProps } = props;
  return (
    <Container className={className}>
      <Icon name="search" />
      <StyledInput {...inputProps} />
    </Container>
  );
}

SearchInput.propTypes = {
  className: PropTypes.string,
};

SearchInput.defaultProps = {
  className: undefined,
};
