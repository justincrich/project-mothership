import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TEXT_BODY } from 'style/mixins';

export default styled(Link)`
  && {
    ${TEXT_BODY}
    color: ${props => props.theme.colors.accent};
    cursor: pointer;
    font-weight: 600;
  }
`;
