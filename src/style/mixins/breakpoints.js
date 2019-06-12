import { css } from 'styled-components';
import { DESKTOP_MIN_WIDTH, TABLET_MIN_WIDTH } from 'style/constants';

const breakpoints = {
  minDesktop: DESKTOP_MIN_WIDTH,
  minTablet: TABLET_MIN_WIDTH,
};

export const tabletMQ = (...args) => css`
  @media (min-width: ${breakpoints.minTablet}) {
    ${css(...args)};
  }
`;

export const desktopMQ = (...args) => css`
  @media (min-width: ${breakpoints.minDesktop}) {
    ${css(...args)};
  }
`;
