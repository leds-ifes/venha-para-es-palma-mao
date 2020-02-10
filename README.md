# Teste para o projeto ES na Palma da mão

## PDI

Processo de ETL realizado com um script em Python e o software Pentaho, 
o script foi responsável por carregar o arquivo candidatos.txt e adapta-lo, 
substituindo os delimitadores de campo por “;” e salvando o novo arquivo com extensão .csv. 
O restante foi feito no pentaho. Os arquivos para essa etapa estão na pasta pdi.

## BACKEND

Produzindo utilizando nestJS a solução é responsável por se comunicar com o banco de dados gerado na etapa 1,
implementar regras de negocio e oferecer rotas para ter acesso as soluções. Os arquivos para essa etapa estão na 
pasta backend/es-palma-da-mao. 


## FRONTEND

O frontend foi implementado usando ionic v3, basicamente são 3 páginas a home responsável por receber os inputs, cpf ou código do concurso, e dois botões um para redirecionar para a busca por cpf, fornecendo uma tabela com todos os concursos que  se encaixam no perfil do candidato, e o outro botão responsáv
el por redirecionar para a busca por código do concurso, oferendo como resposta uma tabela que lista todos os candidatos que 
se encaixam.


## rodar a aplicação
- No diretório do backend (desafio/backend/es-palma-da-mão) execute o comando: nest start 
- No diretório do frontend (desafio/frontend/app) execute o comando: ionic serve

## Diferenciais 
- banco de dados
 - tecnologia escolhida
