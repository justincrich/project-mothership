import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { KeyedListMapper } from 'core';
import { arrow } from 'assets/icons';
import { SPACING_SMALL } from 'style/constants';
import { LINK_LITE } from 'style/mixins';
import DropDown from 'components/DropDown';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: ${props => props.theme.colors.accent};
  cursor: pointer;
`;

const IconContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: ${SPACING_SMALL};
`;

const DownArrow = styled(arrow)``;

const StyledDropDown = styled(DropDown)`
  position: absolute;
  right: -16px;
  width: 125px;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
`;

const StyledLink = styled.a`
  ${LINK_LITE}
  margin-bottom: ${SPACING_SMALL};
  justify-content: flex-end;
  text-transform: capitalize;
  &:last-child{
    margin-bottom: 0px;
  }
`;

const FORMAT_TYPES = {
  BOL: 'billOfLading',
  INVOICE: 'invoice',
};

const formatName = type => {
  if (type === FORMAT_TYPES.BOL) {
    return 'BOL/POD';
  }
  return type;
};

export default function DocumentSelect(props) {
  const { documents } = props;
  const [isOpen, setOpen] = useState(false);
  return (
    <Container
      onClick={() => {
        if (!isOpen) {
          setOpen(true);
        }
      }}
    >
      View Docs{' '}
      <IconContainer>
        <DownArrow />
        {isOpen && (
          <StyledDropDown pointRight onClose={() => setOpen(false)}>
            <BodyContainer>
              <KeyedListMapper list={documents}>
                {(key, document) => (
                  <StyledLink href={document.url} target="_blank">
                    {formatName(document.type)}
                  </StyledLink>
                )}
              </KeyedListMapper>
            </BodyContainer>
          </StyledDropDown>
        )}
      </IconContainer>
    </Container>
  );
}

DocumentSelect.propTypes = {
  documents: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf([FORMAT_TYPES.BOL, FORMAT_TYPES.INVOICE])
        .isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
