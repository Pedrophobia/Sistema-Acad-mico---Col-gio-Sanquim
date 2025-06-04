Sistema de Controle Acadêmico - Colégio Sanquim
Visão Geral do Projeto

Este projeto consiste no desenvolvimento de um Sistema de Controle Acadêmico web, focado inicialmente no frontend, para o Colégio Sanquim, um cursinho pré-vestibular gratuito. O objetivo é proporcionar uma plataforma intuitiva para o gerenciamento e consulta de informações acadêmicas, como matrículas, faltas e notas, com uma interface moderna e alinhada à identidade visual da instituição.

Este trabalho faz parte do Projeto Integrador do 1º semestre do curso de Análise e Desenvolvimento de Sistemas da FATEC Mogi Mirim, com estrutura preparada para futura integração com banco de dados.
Arquitetura e Tecnologias

O sistema é construído com foco na modularidade para permitir futuras expansões e a integração com um backend robusto.

    Frontend:
        HTML5: Estruturação das páginas.
        CSS3 (com Bootstrap): Estilização e responsividade da interface, seguindo a identidade visual do Colégio Sanquim.
        JavaScript: Interatividade e funcionalidades dinâmicas.

    Backend (Previsão para Futura Integração):
        PHP: Linguagem de programação para o lado do servidor.
        MySQL: Sistema de Gerenciamento de Banco de Dados.

    Ambiente de Desenvolvimento Local:
        XAMPP: Servidor local para simular o ambiente de produção (Apache, MySQL, PHP).

Gerenciamento de Usuários e Autenticação

O sistema implementa um sistema de autenticação que diferencia o acesso e as permissões de acordo com o perfil do usuário:

    Alunos: Podem visualizar suas faltas, notas e acessar materiais de apoio. Não possuem permissões de edição.
    Professores: Possuem as mesmas permissões de visualização dos alunos, além da capacidade de editar notas e registrar faltas.

Fluxo de Login

    O usuário acessa a página de login (login.html).
    O sistema verifica as credenciais informadas em um banco de dados (futura integração).
    Com base no perfil do usuário, o sistema redireciona para a interface correspondente, aplicando as permissões de acesso.

Estrutura e Explicação das Páginas

As páginas do frontend são projetadas para oferecer uma experiência de usuário clara e funcional:

    index.html (Página Inicial):
        Ponto de entrada do sistema após o login.
        Apresenta opções de navegação para as seções de Faltas, Notas e Materiais de Apoio.
        Redireciona o usuário para a seção desejada ao clicar.

    materiais.html (Materiais de Apoio):
        Exibe recursos educacionais como PDFs, links externos e vídeos para consulta dos alunos.
        Projetado para futura expansão, permitindo que professores façam upload de novos materiais.

    notas.html (Consulta de Notas):
        Apresenta as notas dos alunos, organizadas por disciplina em cartões estilizados.
        Futuramente, será integrado com o banco de dados para permitir que professores editem as notas diretamente.

    faltas.html (Registro de Faltas):
        Exibe o total de aulas, número de faltas e a porcentagem de presença.
        Preparado para atualizações dinâmicas e gerenciamento via integração com o banco de dados.

    login.html e login.php (Autenticação):
        Interface de login para alunos e professores.
        login.php (no backend) é responsável pela validação das credenciais e definição das permissões de usuário.

Fluxo de Uso do Sistema

O sistema é projetado para um fluxo de trabalho otimizado para ambos os perfis de usuário:

    Login: O usuário realiza a autenticação na página de login, acessando as funcionalidades conforme seu perfil (aluno ou professor).
    Acesso de Alunos: Alunos podem visualizar suas informações de faltas e notas, bem como acessar e baixar materiais de apoio.
    Acesso de Professores: Professores têm acesso completo às funcionalidades de visualização e, adicionalmente, podem editar notas e atualizar registros de faltas.
    Armazenamento de Dados: Todas as informações serão gerenciadas e armazenadas de forma segura no banco de dados, garantindo a integridade e atualização automática dos registros (após integração com backend).

Melhorias Futuras Planejadas

O projeto possui um roadmap de melhorias para aprimorar a experiência e expandir a funcionalidade:

    Interface e Experiência do Usuário (UX): Implementação de animações e aprimoramentos de estilo para uma navegação ainda mais fluida e visualmente atraente.
    Painel Administrativo: Desenvolvimento de um painel de controle robusto para gerenciar usuários, disciplinas e configurações gerais do sistema.
    Relatórios de Desempenho: Inclusão de funcionalidades para gerar relatórios detalhados sobre o desempenho acadêmico dos alunos.
    Sistema de Notificações: Implementação de alertas para notificar alunos sobre novas notas, atualizações de faltas ou materiais.

Conclusão

O Sistema de Controle Acadêmico - Colégio Sanquim representa um passo significativo na digitalização da gestão acadêmica. Com sua interface moderna e a distinção clara de permissões entre alunos e professores, ele visa otimizar as consultas e edições de registros. A futura integração com um banco de dados garantirá um gerenciamento automático e seguro das informações, proporcionando uma experiência eficiente e centralizada para todos os usuários do Colégio Sanquim
