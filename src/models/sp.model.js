const connection = require('./connection');

const findAllSp = async () => {
  const [result] = await connection.execute(
    `
    SELECT t1.nome_escola, t1.fundacao, t2.cidade, t3.grupo
    FROM EscolasDeSamba.escolas_sp AS t1
    INNER JOIN EscolasDeSamba.cidades AS t2 ON t1.cidade_id = t2.id
    INNER JOIN EscolasDeSamba.grupos AS t3 ON t1.grupo_id = t3.id;
    `
  );

  return result;
}

module.exports = {
  findAllSp,
}