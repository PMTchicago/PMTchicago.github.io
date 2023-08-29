import styled from '@emotion/styled';

const Container = styled.div`
  font-family: sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const Heading = styled.h1`
  font-family: 'Times New Roman', Times, serif;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <Heading>PMT Chicago</Heading>
      {children}
    </Container>
  );
}