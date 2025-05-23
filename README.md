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
