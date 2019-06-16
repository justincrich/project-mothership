import { css } from 'styled-components';
import { FONT_WEIGHT_BOLD, FONT_WEIGHT_LITE } from 'style/constants';

export const TEXT_FONT_FAMILY = css`
  font-family: ${props => props.theme.fonts.family};
`;

export const TEXT_NORMAL = css`
  ${TEXT_FONT_FAMILY};
  color: ${props => props.theme.colors.fontColorLightBkg};
  font-style: normal;
  font-weight: ${FONT_WEIGHT_LITE};
`;

export const TEXT_BODY = css`
  ${TEXT_NORMAL}
  font-size: ${props => props.theme.fonts.sizes.body};
  line-height: ${props => props.theme.fonts.sizes.bodyHeight};
`;

export const TEXT_BODY_SMALL = css`
  ${TEXT_NORMAL}
  font-size: ${props => props.theme.fonts.sizes.bodySM};
  line-height: ${props => props.theme.fonts.sizes.bodySMHeight};
  opacity: 0.5;
`;

export const TEXT_HEADER = css`
  ${TEXT_NORMAL}
  font-size: ${props => props.theme.fonts.sizes.header};
  line-height: ${props => props.theme.fonts.sizes.headerHeight};
  font-weight: ${FONT_WEIGHT_BOLD};
`;

export const TEXT_INPUT = css`
  ${TEXT_NORMAL}
  font-weight: ${FONT_WEIGHT_BOLD};
  font-size: ${props => props.theme.fonts.sizes.input};
  line-height: ${props => props.theme.fonts.sizes.inputHeight};
`;
