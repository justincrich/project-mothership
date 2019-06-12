import React from 'react';
import styled from 'styled-components';
import { PAGE_BODY } from 'style/mixins';

const Body = styled.div`
  ${PAGE_BODY}
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export default function NotFound() {
  return <Body>Page Not Found</Body>;
}
