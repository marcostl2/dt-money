export type TransactionType = 'deposit' | 'withdraw' | null;

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: TransactionType;
  category: string;
  createdAt: string;
}
