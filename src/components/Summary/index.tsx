import { useTransactions } from '../../hooks';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container, TotalCard } from './styles';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (total, transaction) => {
      if (transaction.type === 'deposit') {
        total.incomes += transaction.amount;
        total.total += transaction.amount;
      } else {
        total.outcomes += transaction.amount;
        total.total -= transaction.amount;
      }

      return total;
    },
    { incomes: 0, outcomes: 0, total: 0 }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entrada" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.incomes)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.outcomes)}
        </strong>
      </div>
      <TotalCard profit={summary.total >= 0}>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entrada" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </TotalCard>
    </Container>
  );
}
