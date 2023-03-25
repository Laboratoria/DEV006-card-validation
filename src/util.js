const Util = {
  invertirCadena: (cad) => {
    return cad.split("").reverse().join("");
  },
  sumarDigitos: (numeroMultiplicado) => {
    const numeroSeparado = numeroMultiplicado.toString().split("");
    let sumaTodoLosDigitos = 0;
    for (let index = 0; index < numeroSeparado.length; index++) {
      sumaTodoLosDigitos = sumaTodoLosDigitos + parseInt(numeroSeparado[index]);
    }
    return sumaTodoLosDigitos;
  }

};

export default Util;