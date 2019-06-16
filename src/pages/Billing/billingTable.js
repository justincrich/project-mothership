import React from 'react';
import Table from 'components/Table';
import PropTypes from 'prop-types';
import DocumentSelect from 'components/DocumentSelect';
import styled from 'styled-components';
import { SPACING_X_SMALL } from 'style/constants';
import { TEXT_BODY_SMALL } from 'style/mixins';

const HEADERS = [
  'date',
  'shipment',
  'locations',
  '',
  'reference',
  'amount',
  'documents',
];

const ShipmentTable = styled(Table)``;
const AddressContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
const LineText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`;

const ReferenceContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Amount = styled(LineText)`
  ${props =>
    props.isRefunded &&
    `
    color: ${props.theme.colors.green};
  `}
`;

const Street = styled(LineText)`
  margin-bottom: ${SPACING_X_SMALL};
`;
const CityStatePostal = styled(LineText)`
  ${TEXT_BODY_SMALL}
`;

const formatNumber = number => number.toString().padStart(2, '0');
const formatAmmount = (amount, isRefunded) => {
  if (isRefunded) {
    return `($${amount})`;
  }
  return `$${amount}`;
};
export default function BillingTable(props) {
  const { lineItems } = props;

  const renderAddress = location => {
    const { city, name, state, zip } = location;
    return (
      <AddressContainer>
        <Street>{name}</Street>
        <CityStatePostal>{`${city}, ${state} ${zip}`}</CityStatePostal>
      </AddressContainer>
    );
  };

  const renderCell = (cellData, colIdx) => {
    const {
      amount,
      date,
      deliveryLocation,
      documents,
      pickupLocation,
      referenceNumber,
      refunded,
      shipmentReferenceNumber,
    } = cellData;

    switch (colIdx) {
      case 0: {
        if (date) {
          const parsedDate = new Date(date);
          return `${formatNumber(parsedDate.getMonth())}/${formatNumber(
            parsedDate.getDate(),
          )}/${formatNumber(parsedDate.getFullYear())}`;
        }
        return null;
      }
      case 1:
        return shipmentReferenceNumber;
      case 2:
        return renderAddress(pickupLocation);
      case 3:
        return renderAddress(deliveryLocation);
      case 4:
        return (
          <ReferenceContainer>
            <LineText>{referenceNumber}</LineText>
          </ReferenceContainer>
        );
      case 5:
        return (
          <Amount isRefunded={refunded}>
            {formatAmmount(amount, refunded)}
          </Amount>
        );
      case 6:
        return <DocumentSelect documents={documents} />;
      default:
        return <div>Invalid Data</div>;
    }
  };

  return (
    <ShipmentTable headers={HEADERS} data={lineItems} renderCell={renderCell} />
  );
}

const ADDRESS_PROPS = {
  city: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
};

BillingTable.propTypes = {
  lineItems: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      deliveryLocation: PropTypes.shape(ADDRESS_PROPS).isRequired,
      documents: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }),
      ).isRequired,
      pickupLocation: PropTypes.shape(ADDRESS_PROPS).isRequired,
      referenceNumber: PropTypes.string.isRequired,
      refunded: PropTypes.bool,
      shipmentReferenceNumber: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
