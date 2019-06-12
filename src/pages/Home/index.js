import React, { useState } from 'react';
import {
  Container,
  PageHeader,
  QueryBody,
  QueryContainer,
  HeadingPrompt,
  Form,
  StyledTextInput,
  SubmitButton,
} from './styles';

export default function Home() {
  const [query, setQuery] = useState({});
  const { term, location } = query;
  return (
    <Container>
      <PageHeader searchDisabled />
      <QueryBody>
        <QueryContainer>
          <HeadingPrompt>Find a Safe Mormon Leader</HeadingPrompt>
          <Form>
            <StyledTextInput
              placeholder="Leader Name or Specialty"
              onChange={value => setQuery({ ...query, term: value })}
              value={term}
            />
            <StyledTextInput
              placeholder="Zip/Postal Code"
              onChange={value => setQuery({ ...query, location: value })}
              value={location}
            />
            <SubmitButton>Find</SubmitButton>
          </Form>
        </QueryContainer>
      </QueryBody>
    </Container>
  );
}
