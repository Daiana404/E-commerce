//Dom
const cajaBuscador = document.querySelector('.caja-buscador');
const btnBuscar = document.querySelector('.btn-buscar');
const btnEnviar = document.querySelector('.btn-enviar');
const grupo = document.querySelector('.grupo-desplegable');
const navegador = document.querySelector('.navegador');
const btnMenu = document.querySelector('.btn-menu');
const nombre = document.querySelector('.nombre');
const btnCerrar = document.querySelector('.btn-cerrar');
const inputBuscar = document.querySelector('#input-buscar');
const main = document.querySelector('.principal');
const encabezado = document.getElementById('encabezado');
//Buscador
let esconderBuscador = () => {
    cajaBuscador.style.visibility = 'hidden';
    cajaBuscador.style.opacity = 0;
    cajaBuscador.style.transform = 'translateY(0%)';
}
let mostrarBuscador = () => {
    cajaBuscador.style.visibility = 'visible';
    cajaBuscador.style.opacity = 1;
    cajaBuscador.style.transform = 'translateY(100%)';
}

btnBuscar.addEventListener('click', () => {
    if(cajaBuscador.style.visibility === 'visible'){ esconderBuscador() } else { mostrarBuscador() }
})

btnEnviar.addEventListener('click', () => {
    if(navegador.classList.contains('activo')){
        console.log('Buscando...')
    } else {
        esconderBuscador();
    }
})

//Navegador
function mediaQueries(x) {
    if (x.matches) {
        nombre.style.zIndex = '0';
        navegador.classList.add('activo');
        navegador.classList.add('hide');
        cajaBuscador.classList.add('activo');
        btnBuscar.style.display = 'none';
        btnMenu.style.display = 'inherit';
    } else {
        nombre.style.zIndex = '3';
        navegador.classList.remove('activo');
        navegador.classList.remove('hide');
        cajaBuscador.classList.remove('activo');
        btnBuscar.style.display = 'inherit';
        btnMenu.style.display = 'none';
    }
}
btnMenu.addEventListener('click', () => {
    navegador.classList.remove('hide');
    navegador.style.setProperty("-webkit-filter", "drop-shadow(0 50px 200px #222)");
})
btnCerrar.addEventListener('click', () => {
    navegador.classList.add('hide');
    navegador.style.setProperty("-webkit-filter", "drop-shadow(0 0 0 transparent)");
})
  
let x = window.matchMedia("(max-width: 1000px)")
  mediaQueries(x);
x.addListener(mediaQueries);
//Scroll
window.addEventListener('scroll', () => {
    if(window.scrollY > 200) {
        encabezado.style.backgroundColor = 'white';
    } else {
        encabezado.style.backgroundColor = 'transparent';
    }
})