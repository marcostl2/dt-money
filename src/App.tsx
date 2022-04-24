import { useState } from 'react';

import { TransactionsProvider } from './contexts/TransactionsContext';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsTable } from './components/TransactionsTable';

import { GlobalStyle } from './styles/globals';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleToggleModal() {
    setIsNewTransactionModalOpen((prevState) => !prevState);
  }

  return (
    <TransactionsProvider>
      <Header onToggleModal={handleToggleModal} />
      <Dashboard />
      <TransactionsTable />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onToggleModal={handleToggleModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
