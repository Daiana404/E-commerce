const productos = [
    {
        id: "remera-01",
        titulo: "Remera uno",
        img: "./",
        precio: 1000,
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        }
    },
    {
        id: "remera-02",
        titulo: "Remera dos",
        img: "./",
        precio: 1500,
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        }
    },
    {
        id: "remera-03",
        titulo: "Remera tres",
        img: "./",
        precio: 2000,
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        }
    },
    {
        id: "pantalon-01",
        titulo: "Pantalón uno",
        img: "./",
        precio: 1200,
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        }
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón dos",
        img: "./",
        precio: 1350,
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        }
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón tres",
        img: "./",
        precio: 8000,
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        }
    },
]

const contenedorProductos = document.querySelector('');

function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div"); // Crea el div en el contenedor producto
        div.classList.add("producto"); //Leagrega la clase producto
        div.innerHTML = `
            html
        ` //Agrega la estructura html al div

        /* Lo demás hay que trabajarlo como objeto */
    })
}