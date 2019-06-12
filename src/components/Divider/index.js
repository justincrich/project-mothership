import styled from 'styled-components';
import { SPACING_X_SMALL } from 'style/constants';

const Divider = styled.div`
  background-color: ${props => props.theme.colors.border};
  height: 1px;
  align-self: stretch;
  margin: ${SPACING_X_SMALL} 0;
`;

export default Divider;
