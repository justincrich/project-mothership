import React, { useMemo, useState } from 'react';
import { useBilling, useUsers, useRouter } from 'hooks';
import BillingTable from './billingTable';
import {
  Container,
  PageHeader,
  MoneyContainer,
  BalanceHeader,
  StyledPaymentPicker,
  MoneySearchContainer,
  Spacer,
  StyledSearchInput,
} from './styles';

export default function Home() {
  const [{ user, organizationId }] = useUsers();
  const [{ location }] = useRouter();
  const [
    { cards, bankAccounts, balance, lineItems },
    { setPaymentMethod },
  ] = useBilling(organizationId);
  const [query, setQuery] = useState(null);

  const defaultPaymentMethod = useMemo(() => {
    const defaultCard = cards.filter(card => Boolean(card.isDefault));
    const defaultBank = bankAccounts.filter(account =>
      Boolean(account.isDefault),
    );
    return defaultBank.length > 0 ? defaultBank[0] : defaultCard[0];
  }, [bankAccounts, cards]);
  const { pathname } = location;
  return (
    <Container>
      <PageHeader user={user} currentPath={pathname} />
      <MoneySearchContainer>
        <MoneyContainer>
          <BalanceHeader>
            Your Balance:{' '}
            {balance &&
              `$${balance.toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}`}
          </BalanceHeader>
          <StyledPaymentPicker
            cards={cards}
            bankAccounts={bankAccounts}
            defaultPaymentMethod={defaultPaymentMethod}
            onChange={setPaymentMethod}
          />
        </MoneyContainer>
        <StyledSearchInput
          onChange={value => setQuery(value)}
          placeholder="Search your shipments"
          icon="search"
          value={query}
        />
      </MoneySearchContainer>
      <Spacer />
      <BillingTable lineItems={lineItems} />
    </Container>
  );
}
