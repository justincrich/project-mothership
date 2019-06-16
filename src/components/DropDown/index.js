import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useClickBoundary } from 'hooks';
import { DARK_GRADIENT, ACTION_BUTTON_LITE } from 'style/mixins';
import { rgba } from 'style/colors';

const Container = styled.div`
  width: 244px;
  z-index: 1000;
`;
const Box = styled.div`
  ${DARK_GRADIENT};
  ${ACTION_BUTTON_LITE}
  flex:1;
  border-radius: 11px;
`;
const Body = styled.div`
  padding: 20px;
  color: ${props => rgba(props.theme.colors.white, 0.7)};
`;

const Footer = styled.div`
  padding: 10px 20px;
  border-top: 1px solid ${props => rgba(props.theme.colors.white, 0.18)};
`;

const Point = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 15px 15px 15px;
  border-color: transparent transparent #484b54 transparent;
  position: relative;
  top: 5px;
  left: ${props => (props.pointRight ? 70 : 10)}%;
`;

export default function DropDown(props) {
  const { children, className, footer, onClose, pointRight } = props;
  const nodeRef = useClickBoundary(onClose);
  return (
    <Container ref={nodeRef} className={className}>
      <Point pointRight={pointRight} />
      <Box>
        <Body>{children}</Body>
        {footer && <Footer>{footer()}</Footer>}
      </Box>
    </Container>
  );
}

DropDown.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  footer: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  pointRight: PropTypes.bool,
};

DropDown.defaultProps = {
  className: undefined,
  footer: undefined,
  pointRight: false,
};
