const sum = require ('./sum.js')

describe('Testa a função sum', () => {
  it('Testa se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4,5)).toBe(9);
  });
  it ('Testa se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0,0)).toBe(0);
  });
  it('Testa se a função sum lança um erro quando os parâmetros são 4 e cinco', () => {
    expect(() => sum(4,'5')).toThrowError('');
  });
  it('Teste se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => sum(4,'5')).toThrowError('parameters must be numbers');
  })
});

