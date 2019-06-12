import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TEXT_INPUT } from 'style/mixins';

const Input = styled.textarea`
  ${TEXT_INPUT}
  flex:1;
`;

function TextArea(props) {
  const { onChange, ...inputProps } = props;
  return (
    <Input onChange={e => onChange(e.target.value, e)} {...inputProps} />
  );
}

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
