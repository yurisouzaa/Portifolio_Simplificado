/* 

    Objetivo 1 - Quando o usuário clicar no botão de Veja Mais! o conteúdo oculto deve aparecer.

    Objetivo 2 - Ter a opção de ocultar o conteúdo que está visível pelo botão Veja Menos!

*/

// Selecionar os elementos

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    if (botaoMostrarProjetos.textContent === "Veja Mais!") {
        mostrarMaisProjetos ();
        botaoMostrarProjetos.textContent = "Veja Menos!";
    } else {
        esconderProjetos ()
        botaoMostrarProjetos.textContent = "Veja Mais!";
    }
});

// Função para mostrar projetos
    function mostrarMaisProjetos () {
        projetosInativos.forEach(projeto => {
            projeto.classList.add('ativo');
        });
    }

// Função para esconder projetos
function esconderProjetos () {
    projetosInativos.forEach(projeto => {
        projeto.classList.remove('ativo');
    });
}