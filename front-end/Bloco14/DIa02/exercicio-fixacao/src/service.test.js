import React from "react";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";

const math = require("./service");
jest.mock("./service");

describe('Testar a função de gerar número aleatório', () => {
  it('Testar se foi chamada', () => {
    math.randomNumber = jest.fn().mockReturnValue(10);

    expect(math.randomNumber()).toBe(10);
    expect(math.randomNumber).toHaveBeenCalled();
    expect(math.randomNumber).toHaveBeenCalledTimes(1);


  });

  it('Criando nova implementação de divisão para a função', () => {
    math.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
    math.randomNumber(10, 2);

    expect(math.randomNumber(10, 2)).toBe(5);
    expect(math.randomNumber).toHaveBeenCalledWith(10, 2);
    expect(math.randomNumber).toHaveBeenCalledTimes(2);
    expect(math.randomNumber).toHaveBeenCalled();
  });

  it('Criando nova implementação de multiplicação para a função', () => {
    math.randomNumber = jest.fn().mockImplementation((a) => a * a);
    math.randomNumber(2);

    expect(math.randomNumber(2)).toBe(4);
    expect(math.randomNumber).toHaveBeenCalledWith(2);
    expect(math.randomNumber).toHaveBeenCalledTimes(2);
    expect(math.randomNumber).toHaveBeenCalled();
  });

});

describe('Testando funções de string', () => {
  it('Testando o inverso que a primeira função faz', () => {
    math.upperString = jest.fn().mockImplementation((string) => string.toLowerCase());
    expect(math.upperString('OI')).toBe('oi');

      // math.upperString.mockRestore();
      // expect(math.upperString('oi')).toBe('OI');
  });

  it('Testando o inverso que a segunda função faz', () => {
    math.getFirstLetra.mockImplementation((string) => string.slice(-1));
    expect(math.getFirstLetra('kkkkK')).toBe('K');
  });

  it('Testando o inverso que a terceira função faz', () => {
    math.twoStringsTogether.mockImplementation((stringA, stringB, stringC) => stringA + stringB + stringC);

    expect(math.twoStringsTogether('a', 'b', 'c')).toBe('abc');
  });
});