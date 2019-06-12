import styled from 'styled-components';
import { SPACING_SMALL, SPACING_MEDIUM, SPACING_LARGE } from 'style/constants';
import {
  TEXT_BODY,
  TEXT_BODY_SMALL,
  DARK_GRADIENT,
  ACTION_BUTTON_LITE,
} from 'style/mixins';
import SearchInput from 'components/SearchInput';
import Button from 'components/Button';
import { Logo } from 'assets/images/svgs';
import { downArrow } from 'assets/icons';

export const Container = styled.div`
  ${DARK_GRADIENT};
  height: 60px;
  display: flex;
  align-items: center;
  width: 100%;
  position: absolute;
  padding: 0 ${SPACING_LARGE};
`;

export const StyledLogo = styled(Logo)`
  margin-right: 40px;
`;

export const LeftBox = styled.div``;

export const CenterBox = styled.div``;

export const RightBox = styled.div``;

export const StyledInput = styled(SearchInput).attrs({
  placeholder: 'Search for a Leader',
})`
  flex: 1;
  max-width: 500px;
`;

export const StyledButton = styled(Button).attrs({
  isLite: true,
})`
  margin: 0 20px;
  &:first-of-type {
    margin-left: 0;
  }
  &:nth-of-type(5) {
    margin-right: 0;
  }
`;

export const UserContainer = styled.div`
  ${ACTION_BUTTON_LITE}
  display: flex;
  flex-direction: row;
`;

export const Arrow = styled(downArrow)``;
