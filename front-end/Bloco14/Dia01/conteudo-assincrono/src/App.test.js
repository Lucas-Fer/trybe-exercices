// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  render(<App />);
  const getEmail = screen.getByLabelText(/email/i);
  expect(getEmail).toBeInTheDocument();
  expect(getEmail).toHaveProperty('type', 'email');
});

test('Verificando se existe o botão.', () => {
  render(<App />);
  const getButton = screen.getAllByRole('button');
  const getIdButton = screen.getByTestId('id-send');
  expect(getButton[0]).toHaveValue('Enviar');
  expect(getButton[1]).toHaveValue('Voltar');
  expect(getButton).toHaveLength(2);
  expect(getIdButton).toBeInTheDocument();
});