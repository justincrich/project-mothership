import DropDown from 'components/DropDown';
import styled from 'styled-components';
import Button from 'components/Button';
import { ACTION_BUTTON } from 'style/mixins';
import { SPACING_SMALL } from 'style/constants';
import { arrow } from 'assets/icons';
import { rgba } from 'style/colors';

export const Container = styled.div`
  ${ACTION_BUTTON}
  align-items: center;
  position: relative;
  white-space: nowrap;
`;
export const StyledButton = styled.button``;

export const IconContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: ${SPACING_SMALL};
`;
export const Arrow = styled(arrow)``;
export const StyledDropDown = styled(DropDown)`
  position: absolute;
  left: -33px;
`;

export const Text = styled.span``;

export const Label = styled.label`
  color: ${props => rgba(props.theme.colors.white, 0.7)};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: ${SPACING_SMALL};
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Radio = styled.input.attrs({
  type: 'radio',
})`
  && {
    appearance: none;
    background-color: transparent;
    height: 10px;
    width: 10px;
    border: 1px solid #54575e;
    border-radius: 100%;
    cursor: pointer;
    box-shadow: 0 0 0 1.5px ${props => rgba(props.theme.colors.white, 0.5)};
    outline: none;
    margin-right: ${SPACING_SMALL};
  }
  &:checked {
    background-color: ${props => rgba(props.theme.colors.white, 1)};
  }
`;

export const AddButton = styled(Button).attrs({
  icon: 'plusCircle',
  isLite: true,
})``;
