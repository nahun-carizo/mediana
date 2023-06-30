function calcularMediana(array) {
    array.sort(function(a, b) { return a - b; });
  
    var posicionMediana = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
      return (array[posicionMediana - 1] + array[posicionMediana]) / 2;
    } else {
      return array[posicionMediana];
    }
  }
  
  var numeros = [];
  
  while (true) {
    var numero = prompt("Ingresa un número (o deja el campo vacío para calcular la mediana)");
    if (numero === null || numero === "") {
      break;
    }
    numero = parseFloat(numero);
    if (!isNaN(numero)) {
      numeros.push(numero);
    }
  }
  
  if (numeros.length > 0) {
    var mediana = calcularMediana(numeros);
    console.log("La mediana de los números ingresados es:", mediana * 2);
  } else {
    console.log("No se ingresaron números.");
  }
  