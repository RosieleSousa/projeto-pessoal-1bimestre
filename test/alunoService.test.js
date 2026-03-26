const service = require('../services/alunoService');

describe('Classificador de Estudante', () => {

  test('Aluno deve ser aprovado se tiver a nota 10', () => {
    expect(service.classificarNota(10)).toBe('Aprovado');
  })

  test('Aluno deve ser aprovado se tiver a nota 7', () => {
    expect(service.classificarNota(7)).toBe('Aprovado');
  })

  test('Aluno deve focar de recuperação se tiver a nota 6.9', () => {
    expect(service.classificarNota(6.9)).toBe('Recuperação');
  })

  test('Aluno deve focar de recuperação se tiver a nota 5', () => {
    expect(service.classificarNota(5)).toBe('Recuperação');
  })

  test('Aluno reprova se tiver a nota 4.9', () => {
    expect(service.classificarNota(4.9)).toBe('Reprovado');
  })

  test('Aluno reprova se tiver a nota 0', () => {
    expect(service.classificarNota(0)).toBe('Reprovado');
  })

  test('Nota negativa é considerada inválida', () => {
    expect(service.classificarNota(-1)).toBe(null);
  })

  test('Nota maior que 10 é considerada inválida', () => {
    expect(service.classificarNota(11)).toBe(null);
  })

  test('Nota undefined é considerada inválida', () => {
    expect(service.classificarNota(undefined)).toBe(null);
  })

  test('Nota null é considerada inválida', () => {
    expect(service.classificarNota(null)).toBe(null);
  })

})