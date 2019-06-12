import styled from 'styled-components';
import { PAGE_BODY, tabletMQ, TEXT_HEADER } from 'style/mixins';
import { SPACING_SMALL } from 'style/constants';
import Header from 'components/Header';
import Image from 'assets/images/home-background.jpg';
import TextInput from 'components/TextInput';
import { rgba } from 'style/colors';
import Button from 'components/Button';

export const Container = styled.div`
  ${PAGE_BODY}
  display: flex;
  flex: 1;
`;

export const PageHeader = styled(Header)``;

export const QueryBody = styled.div`
  background-image: url(${Image});
  background-size: cover;
  background-position: center;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const QueryContainer = styled.div`
  width: 100%;
  min-height: 220px;
  background: ${rgba('#000', 0.5)};
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  ${tabletMQ`
    max-width: 940px;
  `}
`;

export const HeadingPrompt = styled.span`
  ${TEXT_HEADER}
  color: ${props => props.theme.colors.fontColorDarkBkg};
`;

export const Form = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${tabletMQ`
    flex-flow: row nowrap;
  `}
`;

export const StyledTextInput = styled(TextInput).attrs({
  border: false,
})`
  background-color: #fff;
  width: 250px;
  margin: ${SPACING_SMALL} 0;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  ${tabletMQ`
      margin: 0 ${SPACING_SMALL};
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  `}
`;

export const SubmitButton = styled(Button)``;
