//console.log("js on");

const xhttp = new XMLHttpRequest();
var botonBusqueda = document.querySelector("#botonBusqueda");
botonBusqueda.addEventListener("click", busqueda);







/*function inicializar(){
    //console.log("inicializar on");
    
    xhttp.open('GET', 'https://api.thecatapi.com/v1/categories', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            let imagenes = JSON.parse(this.responseText);
            console.log(imagenes);
            var center = document.querySelector('#center');
            
            for(let item of imagenes){
                var div = document.createElement("div");
                center.appendChild(div);
                var img = document.createElement("img");
                div.appendChild(img);
                img.setAttribute("src", item.pageURL);
             
            }
        }
    }
    inicializarFooter();
}
*/
function busqueda(){
    //console.log("busqueda on");

    var categoria = document.querySelector('#busqueda').value;
    var pagina = document.querySelector('#pagina').value;

   inicializar(pagina, categoria);

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            let imagenes = JSON.parse(this.responseText);

            var center = document.querySelector('#center');
            
            for(let item of imagenes){
                if(item.categoria == filtro){
                    center.innerHTML += item.imagen;
                }
                
            }
        }
    }


    //inicializarFooter();
}
/*
function inicializarFooter(){
    console.log("inicializarFooter on");

    //item of imagenes.length / 8???

}

*/


function request(url) {

    return new Promise(function (resolve, reject) {

        const xhr = new XMLHttpRequest()

        xhr.timeout = 2000

        xhr.onreadystatechange = function (e) {

            if (xhr.readyState === 4) {

                if (xhr.status === 200) {

                    resolve(xhr.response)

                } else {

                    reject(xhr.status)

                }

            }

        }

        xhr.ontimeout = function () {

            reject('timeout')

        }



        xhr.open('get', url, true)

        xhr.send()

    })

}



function inicializar(pagina, categoria) {

    

    let api = 'https://pixabay.com/api/?key=15302803-762f6e93f6b7e642009d5c6eb&q=yellow+flowers&image_type=photo&q='+categoria+'&page='+pagina;

    const apiPromise = request(api)

    apiPromise

        .then(function printImagenes(json){

            let api = JSON.parse(json)
            
            var center = document.querySelector('#center');
            console.log(api)

            for (let item of api.hits) {

                var div = document.createElement("div");
                center.appendChild(div);
                var img = document.createElement("img");
                div.appendChild(img);
                img.setAttribute("src", item.previewURL);

            }

            



        })

        .catch(function handleErrors(error) {

            console.log("Error in the Movies Carousel Promise")

        })
}