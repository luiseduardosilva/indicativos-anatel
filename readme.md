# Indicativos Disponíveis na Anatel - Scraping

Este projeto consiste em um Scraping que realiza a coleta de informações sobre os indicativos disponíveis para uso na Anatel. O objetivo é obter dados atualizados sobre os indicativos de rádio amador disponíveis, permitindo aos usuários verificar sua disponibilidade.

O Scraping faz uma requisição à Anatel para validar se um indicativo de rádio amador está disponível ou não. Os resultados são armazenados no arquivo `list.txt` para consulta posterior.

Com essa solução, é possível obter informações atualizadas e precisas sobre os indicativos disponíveis na Anatel, facilitando a pesquisa e seleção de indicativos para os interessados em operar em radioamadorismo.

## Lista de indicativos disponíveis

-   Os indicativos Disponíveis são salvos em `list.txt`

## Como utilizar:

Faça uma cópia do arquivo `.env.example` e renomeie para `.env`.

```
    cp .env.example .env
```

Execute o comando `npm i` para instalar as dependências necessárias.

```
    npm i
```

Execute o comando `npm run start` para iniciar o projeto.

```
    npm run start
```

Certifique-se de modificar o valor do `PREFIX` no arquivo `.env` de acordo com sua região.
