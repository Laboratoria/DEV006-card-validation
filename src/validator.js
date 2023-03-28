import Util from "./util.js";

const validator = {
  isValid: (numeroTarjeta) => {
    if (numeroTarjeta === ""){
      return false;
    }
    const numeroArray = Util.invertirCadena(numeroTarjeta).split("");
    let numeroAsumar = 0
    for (let index = 0; index < numeroArray.length; index++) {
      //Se obtiene el valor de la cadena y este es transformado a su presentación númerica//
      const element = parseInt(numeroArray[index]);
      if ((index + 1) % 2 === 0) {
        const numeroMultiplicado = element * 2;
        if (numeroMultiplicado > 9) {
          numeroAsumar += Util.sumarDigitos(numeroMultiplicado);
        } else {
          numeroAsumar += numeroMultiplicado;
        }
      } else {
        numeroAsumar += element;
      }
    }
    return numeroAsumar % 10 === 0;
  },
  maskify: (cad) => {
    let valorEncriptado = "";
    const cadArray = cad.split("");
    for (let index = 0; index < cadArray.length; index++) {
      valorEncriptado=valorEncriptado+((index < cadArray.length-4)?"#":cadArray[index]);
    }
    return valorEncriptado;
  }
};

export default validator;
