import { css } from 'styled-components';
import { rgba } from '../colors';
import {
  OPACITY_PASSIVE,
  COLOR_TEXT,
  OPACITY_NORMAL,
  OPACITY_DISABLED,
} from '../constants';

export const TEXT_FONT_FAMILY = css`
  font-family: ${props => props.theme.fonts.family};
`;

export const TEXT_NORMAL = css`
  ${TEXT_FONT_FAMILY};
  color: ${props =>
    rgba(COLOR_TEXT, props.disabled ? OPACITY_DISABLED : OPACITY_NORMAL)};
`;

export const TEXT_PASSIVE = css`
  ${TEXT_NORMAL} 
  color: ${props =>
    rgba(COLOR_TEXT, props.disabled ? OPACITY_DISABLED : OPACITY_PASSIVE)};
  `;

export const TEXT_BODY = css`
  ${TEXT_PASSIVE}
  font-size: ${props => props.theme.fonts.sizes.body};
  line-height: ${props => props.theme.fonts.sizes.bodyHeight};
`;

export const TEXT_BODY_SMALL = css`
  ${TEXT_PASSIVE}
  font-size: ${props => props.theme.fonts.sizes.bodySM};
  line-height: ${props => props.theme.fonts.sizes.bodySMHeight};
`;

export const TEXT_TITLE = css`
  ${TEXT_PASSIVE}
  font-weight: bold;
  font-size: ${props => props.theme.fonts.sizes.body};
  line-height: ${props => props.theme.fonts.sizes.bodyHeight};
  text-transform: uppercase;
`;

export const TEXT_TITLE_SM = css`
  ${TEXT_PASSIVE}
  font-size: ${props => props.theme.fonts.sizes.bodySM};
  line-height: ${props => props.theme.fonts.sizes.bodySMHeight};
  text-transform: uppercase;
`;

export const TEXT_HEADER = css`
  ${TEXT_PASSIVE}
  font-size: ${props => props.theme.fonts.sizes.header};
  line-height: ${props => props.theme.fonts.sizes.headerHeight};
`;

export const TEXT_SUB = css`
  ${TEXT_PASSIVE}
  font-size: ${props => props.theme.fonts.sizes.sub};
  line-height: ${props => props.theme.fonts.sizes.subHeight};
`;
