import { useTransactions } from '../../hooks';

import { Container, MobileTransactionsContainer } from './styles';

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Container className="container-width">
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td
                className={
                  transaction.type === 'deposit' ? 'deposit' : 'withdraw'
                }
              >
                {transaction.type === 'withdraw' && '- '}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <MobileTransactionsContainer>
        <div className="mobile-transactions-header">
          <h5>Listagem</h5>
          <span>
            {transactions.length} {transactions.length === 1 ? 'item' : 'itens'}
          </span>
        </div>
        {transactions?.map((transaction) => (
          <div key={transaction.id} className="mobile-transactions-card">
            <h6>{transaction.title}</h6>
            <p
              className={
                transaction.type === 'deposit' ? 'deposit' : 'withdraw'
              }
            >
              {transaction.type === 'withdraw' && '- '}
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(transaction.amount)}
            </p>
            <div>
              <span>{transaction.category}</span>
              <span>
                {' '}
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </span>
            </div>
          </div>
        ))}
      </MobileTransactionsContainer>
    </Container>
  );
}
