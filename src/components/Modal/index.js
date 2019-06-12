import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Actions,
  StyledButton,
  Header,
  Body,
  DiscardButton,
} from './styles';

function Modal(props) {
  const { onConfirm, onClose, onDiscard, labels, header, children } = props;

  return (
    <Container>
      {header && <Header>{header}</Header>}
      <Body>{children}</Body>
      <Actions>
        {onClose && (
          <StyledButton onClick={onClose} passive>
            {labels.close}
          </StyledButton>
        )}
        {onDiscard && (
          <DiscardButton onClick={onDiscard}>{labels.discard}</DiscardButton>
        )}
        <StyledButton onClick={onConfirm}>{labels.confirm}</StyledButton>
      </Actions>
    </Container>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  header: PropTypes.string,
  labels: PropTypes.shape({}),
  onClose: PropTypes.func,
  onConfirm: PropTypes.func.isRequired,
  onDiscard: PropTypes.func,
};

Modal.defaultProps = {
  header: undefined,
  labels: {
    close: 'Cancel',
    confirm: 'Submit',
  },
  onClose: undefined,
  onDiscard: undefined,
};

export default Modal;
