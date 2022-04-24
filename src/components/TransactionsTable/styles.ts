import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  margin: 0 auto;
  margin-top: 4rem;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    padding: 0 1.5rem;

    .mobile-transactions-card {
      display: block;
    }
    table {
      display: none;
    }
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      line-height: 1.5rem;
      padding: 1rem 2rem;
      text-align: left;
      font-weight: 400;
    }

    td {
      color: var(--text-body);
      padding: 1rem 2rem;
      border: 0;
      background-color: var(--shape);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }
`;

export const MobileTransactionsContainer = styled.div`
  .mobile-transactions-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    h5 {
      color: var(--text-title);
      font-size: 1.3rem;
    }

    span {
      font-weight: 500;
      font-size: 0.875rem;
      color: var(--text-body);
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  .mobile-transactions-card {
    color: var(--text-title);
    padding: 1rem 1.5rem;
    border: 0;
    background-color: var(--shape);
    border-radius: 0.25rem;

    @media screen and (min-width: 768px) {
      display: none;
    }

    h6 {
      font-size: 0.875rem;
      line-height: 1.3rem;
      font-weight: 400;
    }

    p {
      font-size: 1.3rem;
      margin: 0;
      margin-top: 2px;

      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }

    div {
      margin-top: 1.3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    & + .mobile-transactions-card {
      margin-top: 0.5rem;
    }
  }
`;
