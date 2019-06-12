import styled from 'styled-components';
import { CARD, TEXT_TITLE, TEXT_BODY_SMALL } from 'style/mixins';
import { MAX_Z_INDEX, SPACING_LARGE, SPACING_MEDIUM } from 'style/constants';
import Button, { BUTTON_TYPES } from 'components/Button';

export const Container = styled.div`
  ${CARD}
  z-index: ${MAX_Z_INDEX};
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  padding: 25px;
  position: flex;
  flex-flow: column;
  flex: 1;
  min-width: 300px;
`;

export const Actions = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
`;

export const Header = styled.div`
  ${TEXT_TITLE}
`;

export const Body = styled.div`
  ${TEXT_BODY_SMALL}
  padding: ${SPACING_MEDIUM} 0;
  flex-flow: column;
  display: flex;
`;

export const StyledButton = styled(Button).attrs({
  type: BUTTON_TYPES.WORD,
})`
  margin-left: ${SPACING_LARGE};
`;
export const DiscardButton = styled(StyledButton)`
  color: ${props => props.theme.colors.red};
`;
