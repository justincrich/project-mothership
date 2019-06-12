import PropagateLoader from 'react-spinners/PropagateLoader';
import styled from 'styled-components';

const Spinner = styled(PropagateLoader).attrs(props => ({
  color: props.theme.colors.accent,
}))``;

export default Spinner;
