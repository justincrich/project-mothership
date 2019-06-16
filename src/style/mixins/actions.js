import { css } from 'styled-components';
import { rgba } from 'style/colors';

export const ACTION_TEXT = css`
  color: ${props => props.theme.colors.accent};
  font-size: ${props => props.theme.fonts.sizes.body};
  line-height: ${props => props.theme.fonts.sizes.bodyHeight}
  font-style: normal;
  font-weight: bold;
  cursor: pointer;
`;

export const ACTION_BUTTON = css`
  ${ACTION_TEXT}
  border-width: 0;
  padding: 0;
`;

export const ACTION_BUTTON_LITE = css`
  ${ACTION_BUTTON};
  color: ${props => props.theme.colors.fontColorDarkBkg};
`;

export const LINK = css`
  ${ACTION_TEXT}
  font-weight: bold;
  cursor: pointer;
`;

export const LINK_LITE = css`
  ${LINK}
  color: ${props => rgba(props.theme.colors.white, 0.7)};
`;
