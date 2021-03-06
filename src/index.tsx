import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import Modal from 'react-modal';

import { App } from './App';

Modal.setAppElement('#root');

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance - Desenvolvimento de site',
          amount: 400,
          type: 'deposit',
          category: 'Dev',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 1200,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date(),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
