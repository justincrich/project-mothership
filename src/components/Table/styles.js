import styled, { css } from 'styled-components';
import { SPACING_LARGE, SPACING_SMALL } from 'style/constants';
import { TEXT_BODY } from 'style/mixins';

const PADDING = css`
  padding: ${SPACING_SMALL} ${SPACING_LARGE};
`;

const SHADE = 'rgba(249, 249, 249, 0.800328)';

export const Container = styled.table`
  ${TEXT_BODY}
`;

export const Row = styled.tr`
  border: 1px solid #000;
  &:hover {
    background-color: ${SHADE};
  }
`;

export const HeaderRow = styled(Row)`
  &:hover {
    background-color: transparent;
  }
`;

export const Header = styled.th`
  ${PADDING}
  font-weight: bold;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0540931);
  text-transform: capitalize;
`;

export const Data = styled.td`
  ${PADDING}
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0540931);
  white-space: nowrap;
  overflow: visible;
`;
