//console.log("js on");

const xhttp = new XMLHttpRequest();
var botonBusqueda = document.querySelector("#botonBusqueda");
botonBusqueda.addEventListener("click", busqueda);
inicializar();



function inicializar(){
    //console.log("inicializar on");
    
    xhttp.open('GET', 'latipica.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            let imagenes = JSON.parse(this.responseText);

            var center = document.querySelector('#center');
            
            for(let item of imagenes/*<8*/){
                center.innerHTML += item.imagen;
            }
        }
    }
    inicializarFooter();
}

function busqueda(){
    //console.log("busqueda on");

    var filtro = document.querySelector('#busqueda');

    xhttp.open('GET', 'latipica.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            let imagenes = JSON.parse(this.responseText);

            var center = document.querySelector('#center');
            
            for(let item of imagenes/*<8*/){
                if(item.categoria == filtro){
                    center.innerHTML += item.imagen;
                }
                
            }
        }
    }


    inicializarFooter();
}

function inicializarFooter(){
    console.log("inicializarFooter on");

    //item of imagenes.length / 8???

}