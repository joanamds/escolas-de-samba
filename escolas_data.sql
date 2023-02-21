USE `EscolasDeSamba`;

SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE `grupos`;
TRUNCATE TABLE `escolas_rj`;
TRUNCATE TABLE `escolas_sp`;
TRUNCATE TABLE `cidades`;

INSERT INTO EscolasDeSamba.grupos (grupo) VALUES
	('Grupo Especial'),
    ('Série Ouro'),
    ('Grupo de Acesso 1');

INSERT INTO EscolasDeSamba.cidades (cidade) VALUES
	('Rio de Janeiro'),
    ('São Paulo'),
    ('Duque de Caxias'),
    ('Nilópolis'),
    ('Niterói'),
    ('São João de Meriti'),
    ('São Gonçalo'),
    ('Belford Roxo');

INSERT INTO EscolasDeSamba.escolas_rj (grupo_id, nome_escola, fundacao, cidade_id) VALUES
    (1, 'Império Serrano', '1947', 1),
    (1, 'Acadêmicos do Grande Rio', '1988', 3),
    (1, 'Mocidade Independente de Padre Miguel', '1955', 1),
    (1, 'Unidos da Tijuca', '1931', 1),
    (1, 'Acadêmicos do Salgueiro', '1953', 1),
    (1, 'Estação Primeira de Mangueira', '1928', 1),
    (1, 'Paraíso do Tuiuti', '1954', 1),
    (1, 'Portela', '1923', 1),
    (1, 'Unidos de Vila Isabel', '1946', 1),
    (1, 'Imperatriz Leopoldinense', '1959', 1),
    (1, 'Beija-Flor', '1948', 4),
    (1, 'Unidos do Viradouro', '1946', 5),
    (2, 'Arranco', '1973', 1),
    (2, 'Lins Imperial', '1963', 1),
    (2, 'Acadêmicos de Vigário Geral', '1991', 1),
    (2, 'Estácio de Sá', '1955', 1),
    (2, 'Unidos de Padre Miguel', '1957', 1),
    (2, 'Acadêmicos de Niterói', '1969', 5),
    (2, 'São Clemente', '1961', 1),
    (2, 'União de Jacarepaguá', '1956', 1),
    (2, 'Unidos da Ponte', '1952', 6),
    (2, 'Unidos de Bangu', '1937', 1),
    (2, 'Em Cima da Hora', '1959', 1),
    (2, 'Unidos do Porto da Pedra', '1978', 7),
    (2, 'União da Ilha do Governador', '1953', 1),
    (2, 'Império da Tijuca', '1940', 1),
    (2, 'Inocentes de Belford Roxo', '1993', 8);

INSERT INTO EscolasDeSamba.escolas_sp (grupo_id, nome_escola, fundacao, cidade_id) VALUES
(1, 'Independente Tricolor', '1987', 2),
(1, 'Acadêmicos do Tatuapé', '1952', 2),
(1, 'Barroca Zona Sul', '1974', 2),
(1, 'Unidos de Vila Maria', '1954', 2),
(1, 'Rosas de Ouro', '1971', 2),
(1, 'Tom Maior', '1973', 2),
(1, 'Gaviões da Fiel', '1969', 2),
(1, 'Estrela do Terceiro Milênio', '1998', 2),
(1, 'Acadêmicos do Tucuruvi', '1976', 2),
(1, 'Mancha Verde', '1995', 2),
(1, 'Império de Casa Verde', '1994', 2),
(1, 'Mocidade Alegre', '1967', 2),
(1, 'Águia de Ouro', '1976', 2),
(1, 'Dragões da Real', '2000', 2),
(3, 'Nenê de Vila Matilde', '1949', 2),
(3, 'X-9 Paulistana', '1975', 2),
(3, 'Camisa Verde e Branco', '1953', 2),
(3, 'Vai-Vai', '1930', 2),
(3, 'Morro da Casa Verde', '1962', 2),
(3, 'Colorado do Brás', '1975', 2),
(3, 'Mocidade Unida da Mooca', '1987', 2),
(3, 'Pérola Negra', '1973', 2);
