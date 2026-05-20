# Aplicativo de Cursos SENAI Suico-Brasileira

Aplicativo mobile em React Native (Expo) para divulgacao de cursos de desenvolvimento com banco SQLite local, modal de detalhes, matricula e contato com a escola.

## Entregaveis

1. Prototipo: [docs/prototipo.md](docs/prototipo.md)
2. Link do repositorio (substituir com o link real): [Repositorio do projeto](https://github.com/seu-usuario/api-senai)
3. Tutorial detalhado: neste README

## Stack Tecnica

- React Native com Expo SDK 54
- SQLite com expo-sqlite
- Axios para integracao HTTP
- React Native Paper para interface

## Justificativa da Biblioteca de Interface

Foi utilizada a biblioteca React Native Paper pelos seguintes motivos tecnicos:

- Entrega componentes prontos e acessiveis (Card, Modal, TextInput, Snackbar, Chip), reduzindo tempo de implementacao sem perder padrao visual.
- Suporte de tema centralizado para cores, tipografia e espacamentos, facilitando consistencia visual em toda a aplicacao.
- Boa compatibilidade com Expo e React Native moderno, com manutencao ativa e comunidade ampla.

## Requisitos Atendidos

- Pagina principal exibindo todos os cursos.
- Clique no curso abre modal com detalhes.
- Cada curso exibe: titulo, subtitulo, nivel, duracao, area, professor, botao de matricula, botao de contato e classificacao.
- Dados armazenados em SQLite.
- Informacoes sobre a escola.
- Informacoes de contato por formulario e e-mail.
- Minimo de 3 cursos por area:
  - front-end: 3
  - back-end: 3
  - banco de dados: 3
  - UI/UX: 3
  - projetos com scrum: 3
  - devops com nuvem: 3

## Tutorial Completo

### 1. Pre-requisitos

- Node.js LTS (recomendado 20+)
- npm
- Expo CLI via npx
- Android Studio (emulador) ou aplicativo Expo Go no celular

### 2. Instalacao e configuracao do ambiente

Clone o projeto e instale dependencias:

```bash
npm install
```

### 3. Criacao do app (referencia)

Caso queira reproduzir do zero:

```bash
npx create-expo-app api-senai
cd api-senai
```

### 4. Instalacao e configuracao de todos os pacotes

Pacotes principais:

```bash
npm install axios react-native-paper
npx expo install expo-sqlite expo-linking
```

Observacao: no SDK 54, o expo-sqlite usa API assincrona com openDatabaseAsync, runAsync e getAllAsync.

### 5. Organizacao do projeto (arquitetura em componentes)

Estrutura:

```text
src/
  components/
    ContactForm.js
    CourseCard.js
    CourseDetailsModal.js
    RatingStars.js
    SchoolInfoCard.js
  constants/
    courseSeed.js
  database/
    sqlite.js
  screens/
    HomeScreen.js
  services/
    contactService.js
    enrollmentService.js
    httpClient.js
  styles/
    theme.js
App.js
```

Separacao aplicada:

- Tela: HomeScreen concentra fluxo da pagina principal.
- Componentes: cards, modal, avaliacao, infos da escola e formulario isolados.
- Servicos: Axios separado para matricula e contato.
- Banco: inicializacao, migracao, seed e consultas em modulo dedicado.
- Estilo: tema centralizado em arquivo proprio.

### 6. Criacao do banco e seed

Ao iniciar o app:

- Cria tabelas courses e enrollments.
- Aplica PRAGMA journal_mode = WAL.
- Verifica se ja existe conteudo.
- Insere 18 cursos de seed (3 por area).

### 7. Configuracoes do app

Arquivo app.json:

- Config plugin do SQLite habilitado em plugins.
- Configuracoes padrao de splash, icones e orientacao.

### 8. Fluxos implementados

- Listagem de cursos na pagina principal.
- Filtro por area.
- Modal de detalhes ao clicar em um curso.
- Matricula:
  - Salva no SQLite (tabela enrollments)
  - Dispara requisicao Axios para endpoint de teste.
- Contato:
  - Botao na modal abre e-mail com mailto.
  - Formulario envia dados via Axios para endpoint de teste.

### 9. Como testar

Inicie o projeto:

```bash
npm start
```

Depois:

- Pressione a para Android
- Pressione w para Web
- Escaneie QR Code com Expo Go

Checklist manual de testes:

1. Verificar carregamento da lista de cursos.
2. Abrir modal em diferentes cursos.
3. Confirmar presenca de todos os campos exigidos.
4. Clicar em Realizar matricula e validar mensagem de sucesso.
5. Clicar em Contato com a escola e validar abertura do app de e-mail.
6. Enviar formulario de contato e validar feedback na tela.
7. Testar filtro por area.

## Observacoes

- O endpoint HTTP utilizado para demonstracao do Axios e o JSONPlaceholder.
- Em producao, substitua por API real do SENAI e adicione autenticacao.
