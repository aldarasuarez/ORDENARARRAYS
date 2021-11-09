"use strict";
/**
 * array.push() Carga un elemento en un array
 * 
 */

let numeros = []
let interruptor = true

const init = () => {

    //nodos
    let form = document.querySelector(".form-floating");
    let input = document.querySelector("#floatingInputValue");
    let output = document.querySelector(".salida"); //es la 2ª etiqueta article

    let btnBorrar = document.querySelector(".btn-secondary")
    let success = document.querySelector(".alert-success");

    let ul = null;


    //Cargamos en el mensaje el array al cargar página
    success.innerHTML = `Array[${numeros}]`;

    //funciones
    const crearUl = () => {
        ul = document.createElement("ul");
        ul.className = "lista";
        output.appendChild(ul)
    }

    const crearLi = valor => {
        const li = document.createElement("li");
        li.innerHTML = valor;
        ul.appendChild(li);
    }

    const deleteLi = () => {
        // console.log(e);
        numeros = []
        success.innerHTML = `Array[${numeros}]`
        console.log(numeros)
        if(ul!==null){
            ul.innerHTML = ""
        }
    }


    //eventos
    form.addEventListener(
        "submit",
        (ev) => {
            ev.preventDefault();
            const number = Number(input.value);
            numeros.push(number)

            if (interruptor === true) {
                interruptor = false;
                crearUl()

            }
            crearLi(number)
            success.innerHTML = `Array[${numeros}]`
        }
    );

    btnBorrar.addEventListener(
        "click",
        deleteLi
    )

}

//el evento load se dispara cuando toda la página ha terminado de cargar.
window.addEventListener(
    "load",
    init
);