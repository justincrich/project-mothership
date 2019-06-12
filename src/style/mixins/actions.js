import { css } from 'styled-components';
import { TEXT_BODY } from 'style/mixins';
import { OPACITY_PASSIVE } from 'style/constants';

export const ACTION_TEXT = css`
  ${TEXT_BODY}
  cursor: pointer;
`;

export const ACTION_BUTTON = css`
  ${ACTION_TEXT}
  font-weight: bold;
  border-width: 0;
  &:active {
    opacity: ${OPACITY_PASSIVE};
  }
`;

export const ACTION_BUTTON_LITE = css`
  ${ACTION_BUTTON};
  color: ${props => props.theme.colors.fontColorDarkBkg};
`;
