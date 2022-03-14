//dibujar un cuadrado hueco con asteriscos *
//funcion apra crear lado de arriba y abajo
//funciona para hacer LOS LADOS costados
//
// crear lado arriba y abajo
//
//hacer un bucle del tama;p de los lados y restarle 2 que representa lso lados
//
//



//1.- funcion que crea  las FILAS
function lado(numero) {
 let lado = ""   ;

 for(let i =0; i < numero;i++){
     lado += "*"

 }
 return lado;
}
//2.-
function cuadrado(numero) {

    // la variable dibuj guarda los arteriscos de lado y le agrega los costado=LADO
    let dibujo = lado(numero) + "\n"

    let contenido = "";

    for (let i = 0; i < (numero-2); i++) {
         contenido = "*";

             for(let x = 0; x <( numero-2); x++){
                 contenido += " ";
             }
             contenido += "*";
       dibujo += contenido + "\n";
    }
contenido += "*";
    dibujo += lado(numero);


    return dibujo;
}
console.log(cuadrado(5));