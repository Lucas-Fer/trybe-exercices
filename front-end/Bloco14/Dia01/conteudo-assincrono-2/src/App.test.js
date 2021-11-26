import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Verificando campo de email e botão', () => {
  beforeEach(() => {
    render(<App />);
  });
  it("Verificando o campo de email", () => {
    const inputEmail = screen.getByLabelText('Email');

    userEvent.type(inputEmail, "example@gmail.com");
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveValue('example@gmail.com');
  });

  it("Verificando o botão", () => {
    const inputButton = screen.getAllByRole('button');
    expect(inputButton[0]).toHaveValue('Enviar');

    userEvent.click(inputButton[0]);
  });

  it("Verificando texto após o clique no  botão", () => {
    const emailValue = screen.getByTestId('id-email-user');
    const inputEmail = screen.getByLabelText('Email');
    const inputButton = screen.getAllByRole('button');

    const EMAIL = 'example@gmail.com';
    userEvent.type(inputEmail, EMAIL);
    userEvent.click(inputButton[0]);
    expect(inputEmail).toHaveValue('');
    expect(emailValue).toHaveTextContent(`Valor: ${EMAIL}`);
  });

});
