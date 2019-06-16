import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { rgba } from 'style/colors';
import {
  OPACITY_DISABLED,
  SPACING_SMALL,
  SPACING_X_SMALL,
} from 'style/constants';
import { TEXT_INPUT } from 'style/mixins';

import * as Icons from 'assets/icons';

const Input = styled.input`
  ${TEXT_INPUT}
  max-width: 100%;
  display: flex;
  flex: 1;
  border: 0;
  background-color: transparent;
  &[type='password'] {
    -webkit-text-security: disc;
    letter-spacing: 1px;
  }
`;

const FieldRow = styled.div`
  padding: ${SPACING_SMALL} ${SPACING_X_SMALL};
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid
    ${props =>
      props.disabled
        ? rgba(props.theme.colors.border, OPACITY_DISABLED)
        : props.theme.colors.border};
  justify-content: stretch;
`;

const TextInput = props => {
  const {
    className,
    border,
    icon: iconKey,
    onChange,
    onReturn,
    placeholder,
    type,
    value,
    disabled,
  } = props;

  const textRef = useRef(null);
  const Icon = Icons[iconKey];
  return (
    <FieldRow className={className} border={border} disabled={disabled}>
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
      {iconKey && <Icon />}
    </FieldRow>
  );
};

TextInput.propTypes = {
  border: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
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
  icon: undefined,
  onReturn: undefined,
  placeholder: undefined,
  rightComponent: undefined,
  type: undefined,
  value: undefined,
};

export default TextInput;
