const boxBuscador = document.querySelector('.box-buscador');
const btnBuscar = document.querySelector('.btn-buscar');
const btnEnviar = document.querySelector('.btn-enviar');
const input = boxBuscador.firstElementChild;
const btnMenu = document.querySelector('.btn-menu');
const grupo = document.querySelector('.grupo');
const navegador = document.getElementById('navegador');
const btnCerrarNav = document.querySelector('.btn-cerrar-nav');

btnMenu.addEventListener('click', () => {
    navegador.classList.add('show');
    grupo.classList.add('show');
    boxBuscador.classList.add('show');
    btnMenu.style.opacity = 0;
})

btnCerrarNav.addEventListener('click', () => {
    
})

btnBuscar.addEventListener('click', () => {
    boxBuscador.classList.add('active');
    btnBuscar.classList.add('active');
    btnEnviar.classList.add('active');
})

btnEnviar.addEventListener('click', () => {
    boxBuscador.classList.remove('active');
    btnBuscar.classList.remove('active');
    btnEnviar.classList.remove('active');
    input.value = '';
})

const resize = () => {
    if(innerWidth < 1000){
        btnMenu.style.left = '20px';
        btnMenu.style.opacity = 1;
    } else {
        btnMenu.style.left = 0;
        btnMenu.style.opacity = 0;
    }
}

if(innerWidth < 1000) {
    btnMenu.style.left = '20px';
    btnMenu.style.opacity = 1;
}
addEventListener('resize', resize);
