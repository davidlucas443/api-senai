# Prototipo Funcional (Baixa Fidelidade)

## Objetivo

Representar a estrutura de navegacao e os blocos da interface do aplicativo de cursos da escola SENAI Suico-Brasileira.

## Tela Principal

```text
+------------------------------------------------+
| Cursos de Desenvolvimento SENAI                |
| Explore os cursos e faca sua matricula         |
+------------------------------------------------+
| [Card] Sobre a Escola SENAI Suico-Brasileira   |
| Texto institucional                             |
+------------------------------------------------+
| Filtro por area: [Todas] [front-end] [back-end]|
| [banco de dados] [UI/UX] [scrum] [devops]      |
+------------------------------------------------+
| [Card Curso]                                   |
| Area | Titulo                                  |
| Subtitulo                                      |
| Nivel | Duracao | Professor | Avaliacao        |
| [Ver detalhes]                                 |
+------------------------------------------------+
| [Card Curso] ... repeticao                     |
+------------------------------------------------+
| [Card Formulario de Contato]                   |
| Nome                                            |
| E-mail                                          |
| Mensagem                                        |
| [Enviar contato]                                |
+------------------------------------------------+
| Contato direto: contato@suico.senai.br          |
+------------------------------------------------+
```

## Modal de Curso

```text
+-----------------------------------------------+
| Titulo do Curso                               |
| Subtitulo                                     |
| Nivel | Duracao                               |
| Area                                          |
| Professor                                     |
| Descricao                                     |
| Avaliacao: ***** 4.8                          |
|                                               |
| [Realizar matricula]                          |
| [Contato com a escola]                        |
| [Fechar]                                      |
+-----------------------------------------------+
```

## Fluxo de Interacao

1. Usuario abre o app e visualiza lista completa.
2. Usuario pode filtrar cursos por area.
3. Usuario toca em Ver detalhes para abrir modal.
4. Usuario realiza matricula ou contato diretamente pela modal.
5. Usuario tambem pode enviar mensagem pelo formulario de contato.
