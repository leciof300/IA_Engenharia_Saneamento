// Elementos principais
const contentSection = document.getElementById('content-section');
const userNameInput = document.getElementById('username');
const saveUserButton = document.getElementById('saveUser');

// Dados para exibição dinâmica
const sections = {
    topografia: `
        <h2>Topografia</h2>
        <ul>
            <li>Topógrafo</li>
            <li>Memorial de cálculo</li>
        </ul>
    `,
    projeto: `
        <h2>Projeto</h2>
        <p>Automação de processos para engenharia.</p>
    `,
    orcamento: `
        <h2>Orçamento</h2>
        <p>Ferramentas para cálculos orçamentários precisos.</p>
    `,
    automacao: `
        <h2>Automação</h2>
        <p>Automação de documentos e fluxos de trabalho.</p>
    `,
    aprender: `
        <h2>Aprender</h2>
        <p>Recursos educacionais para profissionais de engenharia.</p>
    `
};

// Ação ao clicar em uma opção do menu
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        const section = item.dataset.section;
        contentSection.innerHTML = sections[section] || '<p>Conteúdo não disponível.</p>';
    });
});

// Salvando usuário
saveUserButton.addEventListener('click', () => {
    const userName = userNameInput.value.trim();
    if (userName) {
        alert(`Usuário ${userName} salvo com sucesso!`);
        localStorage.setItem('userName', userName); // Salva no armazenamento local
    } else {
        alert('Por favor, insira um nome de usuário.');
    }
});

// Carregar usuário salvo (opcional)
window.addEventListener('DOMContentLoaded', () => {
    const savedUser = localStorage.getItem('userName');
    if (savedUser) {
        userNameInput.value = savedUser;
    }
});
