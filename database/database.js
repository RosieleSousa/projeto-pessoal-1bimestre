const alunos = []

function salvarAluno(nota, classificacao) {
  alunos.push({ nota, classificacao })
  return true
}

function listarAlunos() {
  return alunos;
}

module.exports = {
  salvarAluno,
  listarAlunos
}