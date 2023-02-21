SELECT escolas.escola_id, escolas.grupo_id, escolas.nome_escola, escolas.fundacao, cidades.cidade
FROM EscolasDeSamba.escolas_rj AS escolas
JOIN EscolasDeSamba.cidades AS cidades ON escolas.cidade_id = cidades.id
UNION
SELECT escolas.escola_id, escolas.grupo_id, escolas.nome_escola, escolas.fundacao, cidades.cidade
FROM EscolasDeSamba.escolas_sp AS escolas
JOIN EscolasDeSamba.cidades AS cidades ON escolas.cidade_id = cidades.id
ORDER BY fundacao;