function saludar(nombre){
    alert('Hola '+ nombre)
}

function procesarEntradasDeUsuario(callback){
    var nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
}
procesarEntradasDeUsuario(saludar)