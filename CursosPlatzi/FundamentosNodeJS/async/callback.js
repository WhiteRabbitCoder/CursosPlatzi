function soyAsincrona(miCallback){
    console.log('Hola, soy una funcion asincrona');
    setTimeout(function (){
        console.log('Estoy siendo asincrona');
        miCallback();
    }, 1000);
}

console.log("Iniciando proceso...");

soyAsincrona(function (){
    console.log("Finalizando proceso...");
});

