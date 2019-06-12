import styled from 'styled-components';
import { TEXT_BODY } from 'style/mixins';

export default styled.button`
  ${TEXT_BODY};
  color: ${props => props.theme.colors.fontColorDarkBkg};
  width: 100px;
  height: 40px;
  background-color: ${props => props.theme.colors.accent};
  border: none;
`;
