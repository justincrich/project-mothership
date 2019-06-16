import React from 'react';
import PropTypes from 'prop-types';
import { KeyedListMapper } from 'core';
import { Container, Row, Header, Data, HeaderRow } from './styles';
// NOTE: Used this 3p library to reduce dev time
// if I were to roll this out I'd probably build my own

export default function Table(props) {
  const { data, headers, renderCell } = props;
  const renderRow = (rowData, rowIdx) => {
    const cells = new Array(headers.length).fill(null);
    if (!renderCell) {
      return null;
    }
    // NOTE: not using keyed list mapper because we are using an
    // artifically created arr based on header count and mapping it
    // back to whatever the callback value is for renderCell
    return cells.map((EMPTY, colIdx) => {
      const key = `r${rowIdx}_c${colIdx}`;
      return <Data key={key}>{renderCell(rowData, colIdx, rowIdx)}</Data>;
    });
  };

  return (
    <Container>
      <HeaderRow>
        <KeyedListMapper list={headers}>
          {(key, header) => <Header key={key}>{header}</Header>}
        </KeyedListMapper>
      </HeaderRow>
      <KeyedListMapper list={data}>
        {(key, rowData, rowIdx) => (
          <Row key={key}>{renderRow(rowData, rowIdx)}</Row>
        )}
      </KeyedListMapper>
    </Container>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  renderCell: PropTypes.func.isRequired,
};
