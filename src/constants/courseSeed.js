export const COURSE_AREAS = [
  'front-end',
  'back-end',
  'banco de dados',
  'UI/UX',
  'projetos com scrum',
  'devops com nuvem',
];

export const COURSE_SEED = [
  {
    title: 'React Essencial',
    subtitle: 'Interfaces modernas para web e mobile',
    level: 'Iniciante',
    duration: '40 horas',
    area: 'front-end',
    professor: 'Profa. Camila Nogueira',
    rating: 4.7,
    description:
      'Aprenda fundamentos de componentes, estado e consumo de APIs para criar telas fluidas e responsivas.',
  },
  {
    title: 'JavaScript Avancado para Front',
    subtitle: 'Arquitetura e performance',
    level: 'Intermediario',
    duration: '48 horas',
    area: 'front-end',
    professor: 'Prof. Andre Lopes',
    rating: 4.8,
    description:
      'Curso focado em padroes de projeto, otimização de renderizacao e boas praticas para projetos escalaveis.',
  },
  {
    title: 'Design System na Pratica',
    subtitle: 'Consistencia visual para produtos digitais',
    level: 'Intermediario',
    duration: '36 horas',
    area: 'front-end',
    professor: 'Profa. Luiza Farias',
    rating: 4.6,
    description:
      'Construa bibliotecas de componentes reutilizaveis e acelere entregas com padroes de UI consistentes.',
  },
  {
    title: 'Node.js com APIs REST',
    subtitle: 'Back-end completo com Express',
    level: 'Iniciante',
    duration: '52 horas',
    area: 'back-end',
    professor: 'Prof. Ricardo Tavares',
    rating: 4.7,
    description:
      'Crie APIs robustas com autenticação, validacao de dados e organizacao por camadas para producao.',
  },
  {
    title: 'Arquitetura de Microsservicos',
    subtitle: 'Escalabilidade e resiliencia',
    level: 'Avancado',
    duration: '60 horas',
    area: 'back-end',
    professor: 'Prof. Hugo Santana',
    rating: 4.9,
    description:
      'Planeje e implemente microsservicos, mensageria, observabilidade e estrategias de deploy seguro.',
  },
  {
    title: 'Java e Spring Boot',
    subtitle: 'Aplicacoes empresariais de alta qualidade',
    level: 'Intermediario',
    duration: '56 horas',
    area: 'back-end',
    professor: 'Profa. Natalia Prado',
    rating: 4.8,
    description:
      'Desenvolva APIs e servicos com Spring Boot, JPA e testes automatizados com foco em mercado corporativo.',
  },
  {
    title: 'SQL do Zero ao Profissional',
    subtitle: 'Consultas eficientes e modelagem',
    level: 'Iniciante',
    duration: '44 horas',
    area: 'banco de dados',
    professor: 'Prof. Denis Almeida',
    rating: 4.7,
    description:
      'Domine comandos SQL, modelagem relacional e tecnicas de consulta para sistemas de grande porte.',
  },
  {
    title: 'Administração PostgreSQL',
    subtitle: 'Seguranca, backup e tuning',
    level: 'Intermediario',
    duration: '42 horas',
    area: 'banco de dados',
    professor: 'Profa. Mariana Teles',
    rating: 4.8,
    description:
      'Aprenda rotinas de administracao, monitoramento e ajustes de performance em bancos PostgreSQL.',
  },
  {
    title: 'Modelagem de Dados Avancada',
    subtitle: 'Do negocio ao banco com qualidade',
    level: 'Avancado',
    duration: '38 horas',
    area: 'banco de dados',
    professor: 'Prof. Vicente Moreira',
    rating: 4.9,
    description:
      'Traduza regras de negocio complexas em modelos consistentes e prontos para alta demanda.',
  },
  {
    title: 'UX Research e Descoberta',
    subtitle: 'Entenda problemas reais de usuarios',
    level: 'Iniciante',
    duration: '32 horas',
    area: 'UI/UX',
    professor: 'Profa. Alice Guimaraes',
    rating: 4.7,
    description:
      'Conduza entrevistas, testes de usabilidade e análise de dados para definir soluções orientadas ao usuario.',
  },
  {
    title: 'UI Design para Aplicativos',
    subtitle: 'Interfaces mobile com foco em conversao',
    level: 'Intermediario',
    duration: '40 horas',
    area: 'UI/UX',
    professor: 'Prof. Bruno Queiroz',
    rating: 4.8,
    description:
      'Desenvolva fluxos, hierarquia visual e prototipos de alta fidelidade para apps atraentes e intuitivos.',
  },
  {
    title: 'Design de Produto Digital',
    subtitle: 'Estrategia, métricas e experiencia',
    level: 'Avancado',
    duration: '50 horas',
    area: 'UI/UX',
    professor: 'Profa. Helena Dias',
    rating: 4.9,
    description:
      'Conecte objetivos de negocio com necessidades de usuarios para criar produtos digitais de impacto.',
  },
  {
    title: 'Scrum Foundations',
    subtitle: 'Base agil para times de desenvolvimento',
    level: 'Iniciante',
    duration: '24 horas',
    area: 'projetos com scrum',
    professor: 'Prof. Mateus Cardoso',
    rating: 4.6,
    description:
      'Entenda papeis, cerimonias e artefatos do Scrum para organizar entregas de software com previsibilidade.',
  },
  {
    title: 'Scrum Master Aplicado',
    subtitle: 'Facilitacao e melhoria continua',
    level: 'Intermediario',
    duration: '36 horas',
    area: 'projetos com scrum',
    professor: 'Profa. Juliana Lima',
    rating: 4.8,
    description:
      'Atue como Scrum Master guiando o time na remocao de impedimentos e evolucao de processos ageis.',
  },
  {
    title: 'Gestao de Produto Agil',
    subtitle: 'Roadmap, backlog e valor continuo',
    level: 'Avancado',
    duration: '42 horas',
    area: 'projetos com scrum',
    professor: 'Prof. Rafael Mota',
    rating: 4.8,
    description:
      'Priorize backlog com foco em valor e construa roadmaps sustentados por dados e hipoteses.',
  },
  {
    title: 'Fundamentos de Cloud e DevOps',
    subtitle: 'Cultura, pipeline e automacao',
    level: 'Iniciante',
    duration: '40 horas',
    area: 'devops com nuvem',
    professor: 'Profa. Fernanda Reis',
    rating: 4.7,
    description:
      'Conheca os pilares de DevOps e cloud para acelerar entregas com qualidade e colaboracao entre times.',
  },
  {
    title: 'CI/CD com GitHub Actions',
    subtitle: 'Deploy continuo com seguranca',
    level: 'Intermediario',
    duration: '34 horas',
    area: 'devops com nuvem',
    professor: 'Prof. Tiago Viana',
    rating: 4.8,
    description:
      'Implemente pipelines de integracao e entrega continua com testes automatizados e gate de qualidade.',
  },
  {
    title: 'Kubernetes em Nuvem',
    subtitle: 'Orquestracao de containers em escala',
    level: 'Avancado',
    duration: '58 horas',
    area: 'devops com nuvem',
    professor: 'Profa. Patricia Soares',
    rating: 4.9,
    description:
      'Orquestre workloads com Kubernetes, monitore servicos e aplique praticas de confiabilidade operacional.',
  },
];
