import styled from 'styled-components';
import { SPACING_SMALL } from 'style/constants';
import { TEXT_TITLE, TEXT_BODY_SMALL } from 'style/mixins';
import Link from 'components/Link';
import SearchInput from 'components/SearchInput';

export const Container = styled.div`
  background: ${props => props.theme.colors.white};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${SPACING_SMALL};
  width: 100%;
  position: absolute;
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

export const SiteName = styled(Link)`
  ${TEXT_TITLE};
`;

export const ActionLink = styled(Link)`
  ${TEXT_BODY_SMALL};
  padding: 0 ${SPACING_SMALL};
`;
