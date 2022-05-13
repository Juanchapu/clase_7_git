/** Vamos a ejecutar una función que recibimos por parámetro a cada uno de los elementos de un array. 

Para esto debemos completar la función procesar. Esta recibe dos parámetros:

1. El primer parámetro es un array.

2. El segundo parámetro que recibe es una función (al que solemos llamar callback).

La función deberá retornar un array donde cada elemento es el resultado de aplicar la función pasada a un elemento del array pasado. */
function agregarHttp(url) {
    let completo1=[]
    let com= url.join();
        let completo = 'http' + com[i];
            completo1 = completo.unshift(com);
            return completo1;
}

function procesar(url,fun){
    return fun(url)
}
console.log(procesar(["www.google.com","www.yahoo.com"], agregarHttp))