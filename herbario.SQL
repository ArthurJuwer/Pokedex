CREATE SCHEMA herbario;
 
USE herbario;
 
CREATE TABLE plantas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_popular VARCHAR(100),
    nome_cientifico VARCHAR(150) UNIQUE,
    familia_botanica VARCHAR(100),
    origem_distribuicao VARCHAR(255),
    usos_medicinais TEXT,
    principios_ativos TEXT,
    parte_utilizada VARCHAR(50),
    modo_preparo TEXT,
    contraindicacoes TEXT,
    imagem VARCHAR(255)
);
 
 
INSERT INTO plantas (
    nome_popular, nome_cientifico, familia_botanica, origem_distribuicao, usos_medicinais,
    principios_ativos, parte_utilizada, modo_preparo, contraindicacoes, imagem
) VALUES
-- 1. Alecrim
('Alecrim', 'Rosmarinus officinalis', 'Lamiaceae', 'Região Mediterrânea',
 'Melhora da memória, digestão e circulação sanguínea.',
 'Óleos essenciais (cineol, borneol), flavonoides, taninos',
 'Folha', 'Infusão, óleo essencial, banho',
 'Evitar em casos de hipertensão e gravidez em excesso.',
 'https://cdn.awsli.com.br/800x800/1348/1348550/produto/111620982/d327f5a0bd.jpg'),
 
-- 2. Comedória-elegante (nome fictício, dados imaginários)
('Comedória-elegante', 'Comedoria elegans', 'Fabaceae', 'América do Sul',
 'Usada tradicionalmente para aliviar dores estomacais e reduzir ansiedade.',
 'Alcaloides leves, flavonoides',
 'Folha e flor', 'Infusão e tintura',
 'Evitar durante a gravidez e lactação. Pode causar sonolência.',
 'https://http2.mlstatic.com/D_NQ_NP_990538-MLB73958253094_012024-O.webp'),
 
-- 3. Lavanda
('Lavanda', 'Lavandula angustifolia', 'Lamiaceae', 'Europa e Mediterrâneo',
 'Calmante, ajuda no sono e ansiedade, cicatrizante.',
 'Linalol, acetato de linalila, taninos',
 'Flor', 'Infusão, óleo essencial, sachê aromático',
 'Evitar uso excessivo do óleo essencial puro. Pode causar irritações.',
 'https://floresnocais.pt/wp-content/uploads/2022/03/lavanda-em-vaso-flores-no-cais-3.jpg'),
 
-- 4. Unha-de-gato
('Unha-de-gato', 'Uncaria tomentosa', 'Rubiaceae', 'Amazônia, América Central e do Sul',
 'Estimulante imunológico, anti-inflamatório, antiviral.',
 'Alcaloides oxindólicos, taninos, flavonoides',
 'Casca e raiz', 'Decocção, cápsula, tintura',
 'Evitar em casos de transplante ou doenças autoimunes. Contraindicada na gravidez.',
 'https://images.tcdn.com.br/img/img_prod/350075/muda_de_unha_de_gato_pote_17_18501_1_11dbbb377fe5e4898a5f183a9c3a2149.jpg'),
 
-- 5. Palmeira de jardim (exemplo genérico)
('Palmeira de jardim', 'Chamaedorea elegans', 'Arecaceae', 'México e América Central',
 'Usada ornamentalmente, sem usos medicinais conhecidos.',
 'Sem princípios ativos relevantes para medicina tradicional',
 'Folhagem', 'Nenhum preparo medicinal conhecido',
 'Não ingerir. Planta ornamental.',
 'https://cdn.awsli.com.br/600x450/1860/1860362/produto/1558668386b01ad02c2.jpg'),
 
-- 6. Ciúsia (possivelmente "Ciusia" fictícia – dados inventados)
('Clúsia', 'Clusia rubra', 'Malvaceae', 'Regiões tropicais do Brasil',
 'Calmante leve, usada em banhos relaxantes e para insônia.',
 'Flavonoides, mucilagens',
 'Folha e flor', 'Infusão, banho',
 'Evitar uso prolongado. Pode causar irritação dérmica em pessoas sensíveis.',
 'https://boxloja-std-cdn-r2.minhaboxloja.com/lojas/9s0e9/produtos/6fc2f12e-6d39-432b-83bb-187811beee37.jpg');
 