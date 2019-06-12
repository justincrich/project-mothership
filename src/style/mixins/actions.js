import { css } from 'styled-components';
import { TEXT_BODY } from 'style/mixins';
import { OPACITY_PASSIVE } from 'style/constants';

export const ACTION_TEXT = css`
  ${TEXT_BODY}
  color: ${props => props.theme.colors.accent};
  cursor: pointer;
`;

export const ACTION_BUTTON = css`
  ${ACTION_TEXT}
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-weight: bold;
  &:active {
    opacity: ${OPACITY_PASSIVE};
  }
`;
