const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    `
    SELECT escolas.escola_id, grupos.grupo, escolas.nome_escola, escolas.fundacao, cidades.cidade
    FROM EscolasDeSamba.escolas_rj AS escolas
    JOIN EscolasDeSamba.cidades AS cidades ON escolas.cidade_id = cidades.id
    JOIN EscolasDeSamba.grupos AS grupos ON escolas.grupo_id = grupos.id
    UNION
    SELECT escolas.escola_id, grupos.grupo, escolas.nome_escola, escolas.fundacao, cidades.cidade
    FROM EscolasDeSamba.escolas_sp AS escolas
    JOIN EscolasDeSamba.cidades AS cidades ON escolas.cidade_id = cidades.id
    JOIN EscolasDeSamba.grupos AS grupos ON escolas.grupo_id = grupos.id
    ORDER BY fundacao;
    `
  );

  return result;
}

const searchAll = async (search) => {
  const [result] = await connection.execute(
    `
    SELECT escolas.escola_id, grupos.grupo, escolas.nome_escola, escolas.fundacao, cidades.cidade
    FROM EscolasDeSamba.escolas_rj AS escolas
    JOIN EscolasDeSamba.cidades AS cidades ON escolas.cidade_id = cidades.id
    JOIN EscolasDeSamba.grupos AS grupos ON escolas.grupo_id = grupos.id
    WHERE escolas.nome_escola LIKE '%${search}%'
    UNION
    SELECT escolas.escola_id, grupos.grupo, escolas.nome_escola, escolas.fundacao, cidades.cidade
    FROM EscolasDeSamba.escolas_sp AS escolas
    JOIN EscolasDeSamba.cidades AS cidades ON escolas.cidade_id = cidades.id
    JOIN EscolasDeSamba.grupos AS grupos ON escolas.grupo_id = grupos.id
    WHERE escolas.nome_escola LIKE '%${search}%'
    ORDER BY fundacao;
    `
  );

  return result;
}

module.exports = {
  findAll,
  searchAll,
}