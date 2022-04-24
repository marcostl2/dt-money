import { useState, useEffect } from 'react';
import Modal from 'react-modal';

import { TransactionType } from '../../types';
import { useTransactions } from '../../hooks';

import { Checkbox } from '../Checkbox';

import closeImg from '../../assets/close.svg';

import { Container, CheckboxesWrapper } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onToggleModal: () => void;
}

export function NewTransactionModal({
  isOpen,
  onToggleModal,
}: NewTransactionModalProps) {
  const [type, setType] = useState<TransactionType>(null);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState<number>(0);

  const { createTransaction } = useTransactions();

  useEffect(() => {
    if (!isOpen) {
      setType(null);
      setCategory('');
      setTitle('');
      setAmount(0);
    }
  }, [isOpen]);

  function handleToggleType(type: TransactionType) {
    setType(type);
  }

  function handleToggleModal() {
    setType(null);
    onToggleModal();
  }

  async function handleCreateNewTransaction(e: React.FormEvent) {
    e.preventDefault();

    await createTransaction({
      title,
      amount,
      type,
      category,
    });

    handleToggleModal();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleToggleModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={handleToggleModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />

        <CheckboxesWrapper>
          <Checkbox
            checked={type === 'deposit'}
            label="Entrada"
            onChange={() => handleToggleType('deposit')}
          />
          <Checkbox
            checked={type === 'withdraw'}
            label="Saída"
            onChange={() => handleToggleType('withdraw')}
          />
        </CheckboxesWrapper>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
