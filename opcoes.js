let pagina = 0;
const container = document.getElementById('container');
const carrossel = document.querySelector('.carrossel');

const itens = container.children.length;
const itensPorPagina = 3;
const maxPagina = Math.ceil(itens / itensPorPagina) - 1;

function mover(direcao) {
    pagina += direcao;

    if (pagina < 0) {
        pagina = 0;
    } else if (pagina > maxPagina) {
        pagina = maxPagina;
    }

    const larguraPagina = carrossel.clientWidth;
    const deslocamento = pagina * larguraPagina;

    container.style.transform = `translateX(-${deslocamento}px)`;
}
