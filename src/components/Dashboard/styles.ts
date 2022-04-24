import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding: 2.5rem 0rem;
  }
`;
