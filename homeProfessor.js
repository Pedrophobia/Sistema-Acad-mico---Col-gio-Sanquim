document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link[data-content-target]');
    const contentSections = document.querySelectorAll('.content-section');
    const professorNameElement = document.querySelector('.dropdown-header'); // Elemento para o nome do professor

    // --- Mock Data (Dados de Exemplo) ---
    const mockData = {
        professor: {
            name: "João Silva"
        },
        dashboard: {
            totalAlunos: 150,
            proximasAulasCount: 3,
            faltasALancar: 5,
            proximasAulas: [
                { data: "05/06/2025", horario: "08:00 - 10:00", turma: "Manhã - Turma A", disciplina: "Matemática" },
                { data: "06/06/2025", horario: "14:00 - 16:00", turma: "Noite - Turma B", disciplina: "Português" },
                { data: "07/06/2025", horario: "09:00 - 11:00", turma: "Tarde - Turma C", disciplina: "Química" }
            ],
            avisosRapidos: "Lembrete: Entrega dos relatórios de acompanhamento até sexta-feira."
        },
        turmas: [
            { curso: "Preparatório ENEM", turma: "Manhã - Turma A", horario: "Seg/Qua/Sex 08:00-12:00", numAlunos: 30 },
            { curso: "Reforço de Matemática", turma: "Noite - Turma B", horario: "Ter/Qui 19:00-22:00", numAlunos: 20 },
            { curso: "Curso de Redação Avançada", turma: "Sáb - Turma Única", horario: "Sáb 09:00-13:00", numAlunos: 15 }
        ],
        disciplinas: [
            { nome: "Matemática", curso: "Preparatório ENEM", linkEmenta: "#" },
            { nome: "Português", curso: "Preparatório ENEM", linkEmenta: "#" },
            { nome: "Física", curso: "Preparatório ENEM", linkEmenta: "#" },
            { nome: "Matemática", curso: "Reforço de Matemática", linkEmenta: "#" },
            { nome: "Redação", curso: "Curso de Redação Avançada", linkEmenta: "#" }
        ],
        materiais: [
            { nome: "Revisão ENEM - Matemática.pdf", linkDownload: "#" },
            { nome: "Exercícios de Crase - Português.docx", linkDownload: "#" },
            { nome: "Resumo de Cinética Química.pptx", linkDownload: "#" }
        ],
        avisos: [
            { titulo: "Reunião de Professores - 15/06", data: "15/06/2025 - 14:00h", conteudo: "Lembrete: Reunião geral de professores na sala de multimídia para planejamento do próximo trimestre." },
            { titulo: "Atualização de Sistema de Notas", data: "01/06/2025", conteudo: "O sistema de lançamento de notas foi atualizado. Favor verificar as novas funcionalidades." },
            { titulo: "Aviso de Feriado", data: "08/06/2025", conteudo: "Informamos que não haverá aulas no dia 09/06/2025 devido ao feriado." }
        ],
        corpoDocente: [
            { nome: "Maria Fernandes", disciplina: "Português", email: "maria.f@sanquim.edu.br" },
            { nome: "Carlos Oliveira", disciplina: "Física", email: "carlos.o@sanquim.edu.br" },
            { nome: "Ana Paula Costa", disciplina: "História", email: "ana.p@sanquim.edu.br" }
        ]
    };

    // --- Funções de Preenchimento de Dados ---

    function updateProfessorInfo() {
        if (professorNameElement) {
            professorNameElement.textContent = `Professor(a) ${mockData.professor.name}`;
            document.getElementById('navbarDropdownMinhaConta').innerHTML = `<i class="fas fa-user-circle me-1"></i> ${mockData.professor.name}`;
            // Também o h3 dentro do dashboard, se existir
            const dashboardWelcome = document.querySelector('#dashboard p');
            if (dashboardWelcome) {
                 dashboardWelcome.innerHTML = `Bem-vindo(a) ao seu painel, Professor(a) ${mockData.professor.name}! Aqui você encontrará um resumo das suas atividades recentes, próximos eventos e avisos importantes.`;
            }
        }
    }

    function populateDashboard() {
        document.getElementById('totalAlunosDashboard').textContent = mockData.dashboard.totalAlunos;
        document.getElementById('proximasAulasDashboard').textContent = mockData.dashboard.proximasAulasCount;
        document.getElementById('faltasALancarDashboard').textContent = mockData.dashboard.faltasALancar;

        const tableBody = document.getElementById('proximasAulasTableBody');
        tableBody.innerHTML = ''; // Limpa antes de preencher
        mockData.dashboard.proximasAulas.forEach(aula => {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td>${aula.data}</td>
                <td>${aula.horario}</td>
                <td>${aula.turma}</td>
                <td>${aula.disciplina}</td>
                <td><button class="btn btn-sm btn-outline-primary">Ver Turma</button></td>
            `;
        });

        document.getElementById('avisosRapidosDashboard').textContent = mockData.dashboard.avisosRapidos;
    }

    function populateTurmas() {
        const tableBody = document.getElementById('turmasTableBody');
        tableBody.innerHTML = '';
        mockData.turmas.forEach(turma => {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td>${turma.curso}</td>
                <td>${turma.turma}</td>
                <td>${turma.horario}</td>
                <td>${turma.numAlunos}</td>
                <td><button class="btn btn-sm btn-info">Ver Detalhes</button></td>
            `;
        });

        // Popula os selects de turma para Lançar Faltas e Lançar Notas
        const turmaFaltaSelect = document.getElementById('turmaFalta');
        const turmaNotaSelect = document.getElementById('turmaNota');
        turmaFaltaSelect.innerHTML = '<option value="">Selecione a turma...</option>';
        turmaNotaSelect.innerHTML = '<option value="">Selecione a turma...</option>';

        mockData.turmas.forEach((turma, index) => {
            const optionFalta = document.createElement('option');
            optionFalta.value = index + 1; // Ou um ID real do BD
            optionFalta.textContent = `${turma.curso} - ${turma.turma}`;
            turmaFaltaSelect.appendChild(optionFalta);

            const optionNota = document.createElement('option');
            optionNota.value = index + 1;
            optionNota.textContent = `${turma.curso} - ${turma.turma}`;
            turmaNotaSelect.appendChild(optionNota);
        });
    }

    function populateDisciplinas() {
        const disciplinasList = document.getElementById('disciplinasList');
        disciplinasList.innerHTML = '';
        mockData.disciplinas.forEach(disciplina => {
            const link = document.createElement('a');
            link.href = disciplina.linkEmenta;
            link.classList.add('list-group-item', 'list-group-item-action', 'd-flex', 'justify-content-between', 'align-items-center');
            link.innerHTML = `
                ${disciplina.nome} - ${disciplina.curso}
                <span class="badge bg-primary rounded-pill">Ver Ementa</span>
            `;
            disciplinasList.appendChild(link);
        });

        // Popula os selects de disciplina para Lançar Faltas, Lançar Notas e Materiais Didáticos
        const disciplinaFaltaSelect = document.getElementById('disciplinaFalta');
        const disciplinaNotaSelect = document.getElementById('disciplinaNota');
        const materialDisciplinaSelect = document.getElementById('materialDisciplina');

        disciplinaFaltaSelect.innerHTML = '<option value="">Selecione a disciplina...</option>';
        disciplinaNotaSelect.innerHTML = '<option value="">Selecione a disciplina...</option>';
        materialDisciplinaSelect.innerHTML = '<option value="">Selecione a disciplina...</option>';

        mockData.disciplinas.forEach((disciplina, index) => {
            const optionFalta = document.createElement('option');
            optionFalta.value = index + 1;
            optionFalta.textContent = disciplina.nome;
            disciplinaFaltaSelect.appendChild(optionFalta);

            const optionNota = document.createElement('option');
            optionNota.value = index + 1;
            optionNota.textContent = disciplina.nome;
            disciplinaNotaSelect.appendChild(optionNota);

            const optionMaterial = document.createElement('option');
            optionMaterial.value = index + 1;
            optionMaterial.textContent = disciplina.nome;
            materialDisciplinaSelect.appendChild(optionMaterial);
        });
    }

    function populateMateriaisDidaticos() {
        const materiaisList = document.getElementById('materiaisEnviadosList');
        materiaisList.innerHTML = '';
        mockData.materiais.forEach(material => {
            const link = document.createElement('a');
            link.href = material.linkDownload;
            link.classList.add('list-group-item', 'list-group-item-action', 'd-flex', 'justify-content-between', 'align-items-center');
            link.innerHTML = `
                <i class="fas fa-file-alt me-2"></i>${material.nome}
                <i class="fas fa-download text-muted"></i>
            `;
            materiaisList.appendChild(link);
        });
    }

    function populateAvisos() {
        const listaAvisos = document.getElementById('listaAvisos');
        listaAvisos.innerHTML = '';
        mockData.avisos.forEach(aviso => {
            const col = document.createElement('div');
            col.classList.add('col-md-6', 'mb-3'); // Usa o sistema de grid para os avisos
            col.innerHTML = `
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${aviso.titulo}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Data: ${aviso.data}</h6>
                        <p class="card-text">${aviso.conteudo}</p>
                    </div>
                </div>
            `;
            listaAvisos.appendChild(col);
        });
    }

    function populateCorpoDocente() {
        const corpoDocenteList = document.getElementById('corpoDocenteList');
        corpoDocenteList.innerHTML = '';
        mockData.corpoDocente.forEach(professor => {
            const col = document.createElement('div');
            col.classList.add('col');
            col.innerHTML = `
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title"><i class="fas fa-user-tie me-2"></i>${professor.nome}</h5>
                        <p class="card-text"><strong>Disciplina:</strong> ${professor.disciplina}</p>
                        <p class="card-text"><strong>Email:</strong> <a href="mailto:${professor.email}">${professor.email}</a></p>
                    </div>
                </div>
            `;
            corpoDocenteList.appendChild(col);
        });
    }

    // --- Lógica de Exibição de Seções (já existente, mas reforçada) ---
    function showSection(targetId) {
        contentSections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none'; // Esconde para garantir que não ocupe espaço
        });
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
            targetSection.style.display = 'block'; // Mostra a seção
        }
    }

    // --- Event Listeners ---
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            const targetId = this.dataset.contentTarget;
            showSection(targetId);

            // Fechar offcanvas em mobile após clicar no link
            const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('sidebarMenu'));
            if (offcanvas) {
                offcanvas.hide();
            }
        });
    });

    // --- Funções de Formulário ---
    function handleFormSubmit(formId, successAlertId) {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', function(event) {
                event.preventDefault(); // Impede o recarregamento da página
                const alertElement = document.getElementById(successAlertId);

                // Aqui você coletaria os dados do formulário e faria a requisição para o backend
                // Por enquanto, apenas exibe a mensagem de sucesso
                alertElement.classList.remove('d-none'); // Mostra o alerta
                form.reset(); // Limpa o formulário

                // Esconde o alerta após alguns segundos
                setTimeout(() => {
                    alertElement.classList.add('d-none');
                }, 3000); // Esconde após 3 segundos
            });
        }
    }

    // --- Inicialização ao carregar a página ---
    updateProfessorInfo();
    populateDashboard();
    populateTurmas();
    populateDisciplinas();
    populateMateriaisDidaticos();
    populateAvisos();
    populateCorpoDocente();

    // Define a data atual nos campos de data dos formulários
    const today = new Date().toISOString().slice(0, 10);
    const dataFaltaInput = document.getElementById('dataFalta');
    if (dataFaltaInput) {
        dataFaltaInput.value = today;
    }

    // Ativa a lógica de envio para os formulários
    handleFormSubmit('formLancarFalta', 'alertFaltaSuccess');
    handleFormSubmit('formLancarNota', 'alertNotaSuccess');
    handleFormSubmit('formUploadMaterial', 'alertUploadSuccess'); // Adicionei um ID de alerta para upload no HTML também

    // Exibir a dashboard por padrão ao carregar a página
    showSection('dashboard');
});