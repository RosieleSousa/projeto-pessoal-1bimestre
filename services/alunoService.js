function classificarNota(nota) {
  if (nota === undefined || nota === null) return null
  if (nota < 0 || nota > 10) return null

  if (nota >= 7) return 'Aprovado'
  if (nota >= 5) return 'Recuperação'
  return 'Reprovado'
}

module.exports = {
  classificarNota
};