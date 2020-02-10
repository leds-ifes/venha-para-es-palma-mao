# TESTE PARA PRODEST 2020
### Introdução
Neste repositório possui uma solução parcial da avaliação do processo seletivo do projeto "ES na palma da mão". Foi utilizado os sistemas em que foi abordado no curso semanal oferecido pelo LEDs

### Tecnologias utilizadas

As tecnologias usadas para a elaboração da solução foram todas indicadas pela propria PRODEST durante o curso semanal.
- Persistencia de dados: ElephantSQL, um banco de dados Postgres online e gratuito. Com auxilio do Pentaho Data Integration para sua população
- Back-end: NodeJs
- Front-end: [não implementada] - IONIC

Majotariamente foi-se utilizado o Linux Mint, porem foi testado tambem no Windows 10.
Para a instalação dos componentes necessarios basta seguir os slides oferecidos pelos tutores do curso semanal da PRODEST. Disponibilizados neste [link](abre.ai/drivepublico) 
### Realizado
Iniciei o projeto com a ideia de querer elaborar a solução utilizando-se apenas dos sistemas oferecidos pelo curso. O [repositorio](https://github.com/leds-ifes/despertar-da-forca-backend) do Leds-ifes foi utilizado para servir como base para a solução do teste.
Utilizando-se ja dos padrões definidos pelo repositorio o back-end foi moldado para a solução do teste.

Os requests implementados foram:
- http://localhost:3000/candidato/aptos/ [inserir: codigo do curso]
- http://localhost:3000/concursos/edital/ [inserir: cpf]

Cujo realizam as soluções propostos do desafio:

1. Listar os **órgãos, códigos e editais dos concursos públicos** que encaixam no perfil do candidato tomando como base o **CPF** do candidato ; 
2. Listar o **nome, data de nascimento e o CPF** dos candidatos que se encaixam no perfil do concurso tomando com base o **Código do Concurso** do concurso público;

É necessario executar a API para que retorne o Json corretamente. Para isso vá na pasta raiz 'es-palma-mao/backend' e execute o comando no terminal:
> npm run start

Para a parte da persistencia. Consegui elaborar sem a necessidade do tratamento dos arquivos .txt, utilizando-se apenas do 'Pentaho Data Integration' uma transformação para cada .txt que realiza a população dos dados no banco. Tais transformações, juntamente com os .txt se encontram na pasta PDI, juntamente com a versão LOW do candidato para a realização rapida de testes.

A parte do front-end infelizmente não esta concluida. Estava a ser construida utilizando-se do framework da IONIC no diretorio 'mobileapp'.

- ------------------------------------------------------------------------ -
# Teste para o projeto ES na Palma da mão

O desafio é desenvolver um aplicativo que permita realizar as seguintes buscas através de uma API: 
1. Listar os **órgãos, códigos e editais dos concursos públicos** que encaixam no perfil do candidato tomando como base o **CPF** do candidato ; 
2. Listar o **nome, data de nascimento e o CPF** dos candidatos que se encaixam no perfil do concurso tomando com base o **Código do Concurso** do concurso público;

O arquivo **candidatos.txt** contém as informações dos candidatos:

| Nome  | Data de Nascimento  | CPF |  Profissões|
|---|---|---|---|
| Lindsey Craft  |  19/05/1976  |  182.845.084-34  |  [carpinteiro]  | 
| Jackie Dawson  |  14/08/1970  |  311.667.973-47  |  [marceneiro, assistente administrativo]  |
| Cory Mendoza |   11/02/1957 |  565.512.353-92  |  [carpinteiro, marceneiro] |

O arquivo **concursos.txt** contém as informações dos concursos públicos:

| Órgão  | Edital  | Código do Concurso |  Lista de vagas|
|---|---|---|---|
| SEDU  | 9/2016  |  61828450843  |  [analista de sistemas, marceneiro]  | 
| SEJUS | 15/2017  |  61828450843  |  [carpinteiro,professor de matemática,assistente administrativo] |
| SEJUS | 17/2017 |  95655123539  |  [professor de matemática] |

**Tente montar uma solução completa para rodar a aplicação**.

Para enviar o resultado, basta realiazar um **Fork** deste repositório e **abra um Pull Request**, **com seu nome e o  número da matrícula**.  

**É importante comentar que deve ser enviado apenas o código fonte. Não aceitaremos códigos compilados**.

Por fim, o candidato deve atualizar o Readme.md com as seguintes informações: 
1. Documentação da solução;
2. Lista dos diferenciais implementados

## Avaliação

O programa será avaliado levando em conta os seguintes critérios:

| Critério  | Valor | 
|---|---|
| Legibilidade do Código |  10  |
| Documentação do código|  10  |
| Documentação da solução|  10  |
| Tratamento de Erros| 10| 
| Total| 40|

A pontuação do candidato será a soma dos valores obtidos nos critérios acima.

## Diferenciais 

O candidato pode aumentar a sua pontuação na seleção implementando um ou mais dos itens abaixo:

| Item  | Pontos Ganhos | 
|---|---|
| Criar um [serviço](https://martinfowler.com/articles/microservices.html) com o problema |  30  |
| Utilizar banco de dados| 30|
| Implementar Clean Code |  20  |
| Implementar o padrão de programação da tecnologia escolhida |  20  |
| Qualidade de [Código com SonarQube](https://about.sonarcloud.io/) |  15  |
| Implementar testes unitários |  15  |
| Implementar testes comportamentais |  15  |
| Implementar integração com [Travis](https://travis-ci.org/)  |  10  |
| Implementar integração com Travis + SonarQube |  10  |
| Implementar usando Docker| 5|
| Total| 170|

A nota final do candidato será acrescido dos pontos referente ao item implementado corretamente.

## Penalizações

O candidato será desclassifiado nas seguintes situações:

1. Submeter um solução que não funcione; 
2. Não cumprir os critérios presentes no seção **Avaliação**
3. Plágio
