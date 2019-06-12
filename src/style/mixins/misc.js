import { css } from 'styled-components';

export const DARK_GRADIENT = css`
  background: linear-gradient(0deg, #54575e 0%, #484b54 50%);
`;

export const CARD = css`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
`;

export const BORDER_BOTTOM = css`
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

export const SCROLL_BAR_WIDTH = css`
  &::-webkit-scrollbar {
    width: 5px;
  }
`;

export const SCROLL_BAR = css`
  ${SCROLL_BAR_WIDTH}
  &::-webkit-scrollbar-thumb {
    background: #e9e9e9;
    border-radius: 3px;
  }
`;
