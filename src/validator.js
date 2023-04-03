/* eslint-disable no-console */
//ALGORITMO DE LUHN
// 1. nombrar la variable NUMERO DE TARJETA
// 2. invertir el orden de los digitos
// 3. multiplica *2 digitos pares 
// si resultado es < 9 , se queda igual
//si resultado es > 9, sumar los digitos
//4. Sumar todos los dígitos de la tarjeta
//5. si resultado de la suma es multiplo de 10 = valida 
//6. si resultado de la suma no es divisible de 10 = inválida

const validator = {
  isValid: (numero) => {
    //Reconoce el N° de string entregado por el usuario Ej. 1234 1234 1233
    console.log(numero);

    //separa el string "1234 1234 1233" a 1, 2, 3 ... y convierte el n° de tarjeta en un array
    const numArray = numero.split("");
    console.log(numArray);

    //invertir el orden del array => 3, 2, 1
    const numReverse = numArray.reverse();
    console.log(numReverse);

    let suma = 0; // variable vacia o cero

    //ciclo FOR par analizar cada elemento
    for (let i = 0; i < numReverse.length; i++) {

      numReverse[i] = parseInt(numReverse[i]);
      //convierte el string en array
      console.log(numReverse);

      if (i % 2 === 0) {
        //multiplicar x 1
        numArray[i] = numArray[i] * 1;
        console.log(numReverse);
      } else {
        //multiplicar x 2
        numArray[i] = numArray[i] * 2;
        console.log(numReverse);
      }

      //si el digito es mayor o igual que 10
      if (numArray[i] >= 10) {

        //se divide / 10 y se le suma +1
        numArray[i] = (numArray[i] % 10) + 1;
        console.log(numReverse);
      }
      //suma de todos los dígitos
      suma += numArray[i];
      console.log(suma);
    }

    //si la suma es divisible de 10 y el residuo es CERO, ES VÁLIDA, de lo contrario inválida
    if (suma % 10 === 0) {
      //si es true la tarjeta es válida
      return true;
      //resultado = true;
    } else {
      alert ("El número de tarjeta de crédito es inválida.");
      return false;
      //resultado = false;
    }
  },

  //pcultando los solo los 4 primeros digitos
  maskify: function(numero) {

    //toString para convertir de numero a una cadena de caracteres
    numero = numero.toString();

    //un acumulador vacio llamado mask
    let mask = "";

    for (let i = 0; i < numero.length; i++) {

      if (i > numero.length - 5) {

        mask = mask + numero[i]

      }else {
        mask = mask + "#"
      }

    }
    console.log(mask);
    return mask
  }
}

export default validator;

