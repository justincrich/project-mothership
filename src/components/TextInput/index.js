import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Label from 'components/Label';
import { rgba } from 'style/colors';
import {
  OPACITY_DISABLED,
  OPACITY_PASSIVE,
  SPACING_SMALL,
} from 'style/constants';

const Container = styled.div`
  align-content: stretch;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: none;
`;
const Input = styled.input`
  max-width: 100%;
  display: flex;
  flex: 1;
  border: 0;
  background-color: transparent;
  &[type='password'] {
    -webkit-text-security: disc;
    letter-spacing: 1px;
  }
  &::placeholder {
    opacity: ${OPACITY_PASSIVE};
  }
`;

const LabelRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
`;

const FieldRow = styled.div`
  padding: ${SPACING_SMALL};
  display: flex;
  flex-direction: row;
  ${props =>
    props.border &&
    `
    border: 2px solid ${
      props.disabled
        ? rgba(props.theme.colors.border, OPACITY_DISABLED)
        : props.theme.colors.border
    };
    border-radius: 5px;
  `}
  justify-content: stretch;
`;

const ErrorMessage = styled(Label)`
  font-size: 1rem;
  color: ${props => props.theme.colors.red};
  margin-left: auto;
`;

const TextInput = props => {
  const {
    className,
    border,
    iconComponent,
    label,
    onChange,
    onReturn,
    placeholder,
    focused,
    rightComponent,
    type,
    value,
    disabled,
    errorMessage,
  } = props;

  const textRef = useRef(null);
  return (
    <Container className={className}>
      <LabelRow>
        {label && <Label disabled={disabled}>{label}</Label>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </LabelRow>
      <FieldRow border={border} disabled={disabled}>
        {iconComponent && iconComponent()}
        <Input
          ref={textRef}
          onChange={e => onChange(e.target.value, e)}
          onKeyUp={e => {
            if (e.keyCode === 13 && onReturn) {
              textRef.current.blur();
              onReturn(e);
            }
          }}
          placeholder={placeholder}
          type={type}
          value={value}
          disabled={disabled}
        />
        {rightComponent && rightComponent({ disabled, focused })}
      </FieldRow>
    </Container>
  );
};

TextInput.propTypes = {
  border: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  focused: PropTypes.bool,
  iconComponent: PropTypes.func,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onReturn: PropTypes.func,
  placeholder: PropTypes.string,
  rightComponent: PropTypes.shape({}),
  type: PropTypes.string,
  value: PropTypes.string,
};

TextInput.defaultProps = {
  border: true,
  className: undefined,
  disabled: false,
  errorMessage: undefined,
  focused: false,
  iconComponent: undefined,
  label: undefined,
  onReturn: undefined,
  placeholder: undefined,
  rightComponent: undefined,
  type: undefined,
  value: undefined,
};

export default TextInput;
