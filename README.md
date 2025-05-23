🏗️ Arquitetura do Sistema
Frontend: HTML, CSS e JavaScript

Backend: PHP e MySQL (Banco de Dados)

Servidor Local: XAMPP

Autenticação: Login com diferenciação entre alunos e professores

🔑 Gerenciamento de Usuários
O sistema identifica dois tipos de usuários: 1️⃣ Alunos – Podem visualizar faltas, notas e materiais de apoio, mas não podem editá-los. 2️⃣ Professores – Além de visualizar, podem editar notas e registros de faltas.

📌 Fluxo de Login
1️⃣ O usuário acessa a página de login. 2️⃣ O sistema verifica suas credenciais no banco de dados. 3️⃣ Se for aluno, ele acessa apenas conteúdos de visualização. 4️⃣ Se for professor, ele tem permissões adicionais para modificar notas e faltas.

📄 Explicação das Páginas
🏠 index.html (Página inicial)
✅ Exibe opções para acessar Faltas, Notas e Materiais de Apoio. ✅ Redireciona para cada seção específica quando clicado.

📂 materiais.html (Materiais de Apoio)
✅ Exibe PDFs, links e vídeos para consulta. ✅ Pode ser expandido para permitir upload de arquivos por professores no futuro.

📊 notas.html (Consulta de Notas)
✅ Mostra notas separadas por disciplina em cartões estilizados. ✅ Professores podem editar notas via banco de dados no futuro.

🚫 faltas.html (Registro de Faltas)
✅ Exibe aulas totais, faltas e porcentagem em quadrados separados. ✅ Pode ser atualizado dinamicamente conforme integração com o banco.

🔐 login.html + login.php
✅ Permite autenticação de alunos e professores. ✅ Define permissões de cada usuário no sistema.

⚡ Fluxo de Uso do Sistema
1️⃣ O usuário faz login e acessa as funcionalidades disponíveis conforme seu perfil. 2️⃣ Alunos podem visualizar suas faltas e notas, além de baixar materiais. 3️⃣ Professores podem editar notas e atualizar registros de faltas diretamente. 4️⃣ O banco de dados armazena todas as informações de maneira automática e segura.

📌 Possíveis Melhorias Futuras
🔹 Melhorar a interface com animações e estilos aprimorados. 🔹 Criar um painel administrativo para permitir interações mais avançadas. 🔹 Adicionar relatórios para análise de desempenho dos alunos. 🔹 Implementar notificações para alertar alunos sobre mudanças nas notas.

🚀 Conclusão
O Sistema Acadêmico - Colégio Sanquim oferece um ambiente digital eficiente para consultas e edições de registros acadêmicos, diferenciando permissões entre alunos e professores. Com a futura integração com banco de dados, as informações serão gerenciadas de forma automática e segura, garantindo uma experiência otimizada para todos os usuários.
