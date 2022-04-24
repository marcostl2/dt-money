import styled from 'styled-components';

interface TotalCardProps {
  profit: boolean;
}

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  margin-top: -10rem;

  @media screen and (max-width: 768px) {
    overflow-x: auto;
  }

  div {
    width: 100%;
    min-width: 260px;
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    &:not(:last-child) {
      background-color: var(--shape);
    }

    @media screen and (max-width: 768px) {
      &:first-of-type {
        margin-left: 1rem;
      }
    }
    &:last-of-type {
      color: var(--shape);

      @media screen and (max-width: 768px) {
        margin-right: 1rem;
      }
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
  }
`;

export const TotalCard = styled.div<TotalCardProps>`
  background-color: ${(props) =>
    props.profit ? 'var(--green)' : 'var(--red)'};
`;
