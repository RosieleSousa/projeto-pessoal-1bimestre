const service = require('../services/alunoService')
const db = require('../database/database')

function classificar(req, res) {
  const { nota } = req.body

  const classificacao = service.classificarNota(nota)

  if (!classificacao) {
    return res.status(400).json({ erro: 'Nota inválida' })
  }

  db.salvarAluno(nota, classificacao)

  return res.status(200).json({
    mensagem: 'Classificação realizada',
    classificacao
  });
}

module.exports = {
  classificar
}