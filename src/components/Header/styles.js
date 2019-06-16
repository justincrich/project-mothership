import styled from 'styled-components';
import { SPACING_SMALL, SPACING_LARGE } from 'style/constants';
import { DARK_GRADIENT, ACTION_BUTTON_LITE } from 'style/mixins';
import SearchInput from 'components/SearchInput';
import { Logo } from 'assets/images/svgs';
import { downArrow } from 'assets/icons';
import Link from 'components/Link';

export const Container = styled.div`
  ${DARK_GRADIENT};
  height: 60px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 ${SPACING_LARGE};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.246122);
`;

export const StyledLogo = styled(Logo)`
  margin-right: 40px;
  min-width: 127px;
  min-height: 19px;
  * {
    fill: ${props => props.theme.colors.white};
  }
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

export const StyledLink = styled(Link).attrs({
  isLite: true,
})`
  && {
    color: ${props =>
      props.accent
        ? props.theme.colors.yellow
        : props.theme.colors.fontColorDarkBkg};
    white-space: nowrap;
  }
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
  align-items: center;
  margin-left: auto;
`;

export const Arrow = styled(downArrow)`
  margin-left: ${SPACING_SMALL};
`;
