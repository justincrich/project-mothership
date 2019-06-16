import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { KeyedListMapper } from 'core';
import {
  Container,
  IconContainer,
  Arrow,
  StyledDropDown,
  Text,
  Label,
  Radio,
  AddButton,
} from './styles';

const formatPaymentMethod = paymentMethod => {
  return `${paymentMethod.brand} *${paymentMethod.last4}`;
};

export default function PaymentPicker(props) {
  const { cards, bankAccounts, defaultPaymentMethod, onChange } = props;
  const [isOpen, setOpen] = useState(false);

  const list = useMemo(() => [...cards, ...bankAccounts], [
    cards,
    bankAccounts,
  ]);

  const renderAddFooter = () => {
    return <AddButton>Add Payment Source</AddButton>;
  };

  return (
    <Container onClick={() => setOpen(true)}>
      Payment Method -{' '}
      {defaultPaymentMethod && formatPaymentMethod(defaultPaymentMethod)}
      <IconContainer>
        <Arrow />
        {isOpen && (
          <StyledDropDown
            open={isOpen}
            onClose={() => setOpen(false)}
            footer={renderAddFooter}
          >
            <KeyedListMapper list={list}>
              {(key, item) => (
                <Label id={item.last4} key={key}>
                  <Radio
                    id={item.last4}
                    checked={defaultPaymentMethod.last4 === item.last4}
                    onChange={() => onChange(item)}
                  />
                  <Text>{formatPaymentMethod(item)}</Text>
                </Label>
              )}
            </KeyedListMapper>
          </StyledDropDown>
        )}
      </IconContainer>
    </Container>
  );
}
const PAYMENT_METHOD = {
  brand: PropTypes.string.isRequired,
  isDefault: PropTypes.string.isRequired,
  last4: PropTypes.string.isRequired,
};
PaymentPicker.propTypes = {
  bankAccounts: PropTypes.arrayOf(PropTypes.shape(PAYMENT_METHOD)).isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape(PAYMENT_METHOD)).isRequired,
  defaultPaymentMethod: PropTypes.shape(PAYMENT_METHOD),
  onChange: PropTypes.func.isRequired,
};

PaymentPicker.defaultProps = {
  defaultPaymentMethod: undefined,
};
