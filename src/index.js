const botonValidar = document.getElementById("boton-validar");

botonValidar.addEventListener("click", validarTarjeta);

function validarTarjeta(e){
 let valorTarjeta = document.getElementById("numero-tarjeta").value;
 let tarjetaInvertida = invertirCadena(valorTarjeta);
 let esTarjetaValida = aplicarAlgoritmoLuhn(tarjetaInvertida)%10==0;
 alert(esTarjetaValida);

}

function invertirCadena(cad) {
    let cadenaInvertida = cad.split("").reverse().join("");
    return cadenaInvertida;
}
 
function aplicarAlgoritmoLuhn(numeroTarjeta){
    let numeroArray =numeroTarjeta.split("");
    let numeroAsumar = 0
    for (let index = 0; index < numeroArray.length; index++) {
        const element = parseInt(numeroArray[index]);
        if ((index+1)%2==0){
            let numeroMultiplicado=element*2;
            if (numeroMultiplicado>9){
                numeroAsumar+=sumarDigitos(numeroMultiplicado);
            } else {
                numeroAsumar+=numeroMultiplicado;
            }
        } else {
            numeroAsumar+=element;
        }
    }
    return numeroAsumar;
}

function sumarDigitos(numeroMultiplicado){
   let numeroSeparado= numeroMultiplicado.toString().split("");
   let sumaTodoLosDigitos=0;
   for (let index = 0; index < numeroSeparado.length; index++) {
        sumaTodoLosDigitos=sumaTodoLosDigitos+parseInt(numeroSeparado[index]);
   }
   return sumaTodoLosDigitos;
}