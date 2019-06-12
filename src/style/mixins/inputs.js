import { css } from 'styled-components';
import { SPACING_X_SMALL } from 'style/constants';
import { TEXT_NORMAL, TEXT_PASSIVE, TEXT_SUB } from 'style/mixins';

export const TEXT_INPUT = css`
  padding: ${SPACING_X_SMALL};
  &,
  & input {
    ${TEXT_NORMAL}
    font-size: 1.6rem;
    background-color: transparent;
    resize: none;
    &::placeholder {
      ${TEXT_PASSIVE}
    }
  }
`;

export const TEXT_INPUT_LABEL = css`
  ${TEXT_SUB}
  text-transform: uppercase;
  font-weight: bold;
`;
