# 📊 Projeto Gerenciamento de Dados com TypeScript

Este projeto tem como objetivo modelar e gerenciar dados vindos de uma API. Os dados simulam transações referentes a compras de produtos, contendo informações como ID, data, forma de pagamento e valor. Por fim, os dados são apresentados de forma organizada em uma tabela, além de exibir estatísticas gerais relacionadas às transações. O projeto foi desenvolvido utilizando **TypeScript** e a ferramenta **Vite** para facilitar o desenvolvimento e automação do seu processo de inicialização.

## 🖥️ Tecnologias Utilizadas

- **TypeScript**: Para garantir maior robustez aproveitar os benefícios da tipagem estática.
- **Vite**: Para proporciona uma configuração rápida e otimizada, com recarga instantânea.
- **HTML5/CSS3**: Para estruturar e estilizar a interface.
- **JavaScript**: Para ditar a lógicam manipulação de dados e interação com a API.

## ⚙️ Funcionalidades

- **Consumo de API**: O projeto consome uma API externa para obter dados sobre transações e compras de produtos.
- **Redesenho de Dados**: Os dados recebidos da API são manipulados e reorganizados para se ajustarem a uma nova estrutura visual.
- **Exibição em Tabela**: As informações sobre as transações são exibidas de forma clara e organizada em uma tabela.
- **Seção de Estatísticas**: Uma seção dedicada a apresentar estatísticas gerais sobre as transações, como totais de compras e formas de pagamento.
- **Interface Desktop Only**: A interface foi projetada para uso exclusivamente em desktop, sem suporte para dispositivos móveis.

## 🔗 Live Link

- [Clique aqui](https://data-maneger-ts.netlify.app) para conferir o projeto!

## 🔎 Preview

<img width="1679" alt="print" src="https://github.com/user-attachments/assets/2380b2f3-ea05-439b-84a7-50726dd575b7" />

## ▶️ Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/renardbergson/gerenciamento-de-dados-ts
   
2. Navegue até o diretório do projeto:

   ```bash
   cd gerenciamento-de-dados-ts

3. Instale as dependências utilizando o npm:

   ```bash
   npm install

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev

5. Estrutura do Projeto

   ```bash
   ├── src/                 # Código fonte do projeto
   │   ├── interfaces/      # Tipos TypeScript para estrutura de dados
   │   ├── models/          # Classes TypeScript para separar as responsabilidades de obter os dados e retornar estatísticas
   │   ├── utils/           # Funções úteis reutilizáveis
   │  ├── main.ts           # Arquivo typescript responsável pelo fluxo principal
   ├── index.html           # Arquivo HTML principal
   ├── tsconfig.json        # Configuração do TypeScript
   ├── vite.config.ts       # Configuração do Vite
   ├── package.json         # Dependências e scripts do projeto
   └── README.md            # Este arquivo

6. Licença

   Este projeto é licenciado sob a licença MIT 


