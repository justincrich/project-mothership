import styled from 'styled-components';
import { PAGE_BODY, TEXT_HEADER } from 'style/mixins';
import { SPACING_MEDIUM, SPACING_LARGE } from 'style/constants';
import Header from 'components/Header';
import TextInput from 'components/TextInput';
import PaymentPicker from 'components/PaymentPicker';

export const Container = styled.div`
  ${PAGE_BODY}
  display: flex;
  flex: 1;
`;

export const PageHeader = styled(Header)``;

export const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const Col = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const MoneySearchContainer = styled(Row)`
  padding: ${SPACING_MEDIUM} ${SPACING_LARGE};
`;

export const MoneyContainer = styled(Col)``;

export const BalanceHeader = styled.span`
  ${TEXT_HEADER}
  margin-bottom: 10px;
`;

export const StyledPaymentPicker = styled(PaymentPicker)``;

export const Spacer = styled.div`
  height: 7px;
  width: 100%;
  background: rgba(248, 248, 248, 0.503085);
  border: 1px solid rgba(151, 151, 151, 0.05);
`;

export const StyledSearchInput = styled(TextInput)`
  margin-left: auto;
  width: 336px;
`;
