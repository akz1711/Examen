function calcularPromedioCalificaciones() {
  const calificacionesStr = document.getElementById("calificaciones").value;
  const respuesta = document.getElementById("resp");

  const calificaciones = calificacionesStr.split(';').map(num => parseFloat(num.trim()));

  if (calificaciones.length !== 5) {
    respuesta.innerHTML = "Por favor ingrese exactamente 5 calificaciones separadas por ';'.";
    return;
  }

  const suma = calificaciones.reduce((acc, calif) => acc + calif, 0);
  const promedio = suma / 5;

  respuesta.innerHTML = `Promedio de calificaciones: ${promedio.toFixed(2)}`;
}

function calcularPromedioMayores() {
  const numerosStr = document.getElementById("numeros").value;
  const limiteStr = document.getElementById("limite").value;
  const respuesta = document.getElementById("resp");

  const numeros = numerosStr.split(';').map(num => parseFloat(num.trim()));
  const limite = parseFloat(limiteStr);

  let suma = 0, conteo = 0;

  for (let num of numeros) {
    if (num > limite) {
      suma += num;
      conteo++;
    }
  }

  if (conteo > 0) {
    respuesta.innerHTML = `Promedio: ${(suma / conteo).toFixed(2)}`;
  } else {
    respuesta.innerHTML = "No hay números mayores que el límite.";
  }
}

function calcularPromedioPares() {
  const numerosStr = document.getElementById("numeros").value;
  const respuesta = document.getElementById("resp");

  const numeros = numerosStr.split(';').map(num => parseFloat(num.trim()));

  if (numeros.length !== 10) {
    respuesta.innerHTML = "Por favor ingrese exactamente 10 números separados por ';'.";
    return;
  }

  let suma = 0, conteo = 0;

  for (let num of numeros) {
    if (num % 2 === 0) {
      suma += num;
      conteo++;
    }
  }

  if (conteo > 0) {
    respuesta.innerHTML = `Promedio de números pares: ${(suma / conteo).toFixed(2)}`;
  } else {
    respuesta.innerHTML = "No hay números pares en el arreglo.";
  }
}

function contarYSumarPositivosNegativos() {
  const numerosStr = document.getElementById("numeros").value;
  const respuesta = document.getElementById("resp");

  const numeros = numerosStr.split(';').map(num => parseFloat(num.trim()));

  if (numeros.length !== 10) {
    respuesta.innerHTML = "Por favor ingrese exactamente 10 números separados por ';'.";
    return;
  }

  let sumaPositivos = 0, sumaNegativos = 0;
  let conteoPositivos = 0, conteoNegativos = 0;

  for (let num of numeros) {
    if (num > 0) {
      sumaPositivos += num;
      conteoPositivos++;
    } else if (num < 0) {
      sumaNegativos += num;
      conteoNegativos++;
    }
  }

  respuesta.innerHTML = `
    Positivos: ${conteoPositivos}, Suma: ${sumaPositivos.toFixed(2)}<br>
    Negativos: ${conteoNegativos}, Suma: ${sumaNegativos.toFixed(2)}
  `;
}

function sumarArreglos() {
  const arreglo1Str = document.getElementById("arreglo1").value;
  const arreglo2Str = document.getElementById("arreglo2").value;
  const respuesta = document.getElementById("resp");

  const arreglo1 = arreglo1Str.split(';').map(num => parseFloat(num.trim()));
  const arreglo2 = arreglo2Str.split(';').map(num => parseFloat(num.trim()));

  if (arreglo1.length !== arreglo2.length) {
    respuesta.innerHTML = "Ambos arreglos deben tener la misma cantidad de elementos.";
    return;
  }

  const sumaArreglo = arreglo1.map((num, index) => num + arreglo2[index]);

  respuesta.innerHTML = `Arreglo suma: [${sumaArreglo.join(', ')}]`;
}

function mostrarNumerosAleatorios() {
  const arreglo = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)); 
  const respuesta = document.getElementById("resp");
  respuesta.innerHTML = `Arreglo de números: [${arreglo.join(', ')}]`;
}

function encontrarMaximo() {
  const numerosStr = document.getElementById("numeros").value;
  const respuesta = document.getElementById("resp");

  const numeros = numerosStr.split(';').map(num => parseFloat(num.trim()));
  let maximo = numeros[0]; 

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
      maximo = numeros[i]; 
    }
  }

  respuesta.innerHTML = `El número máximo es: ${maximo}`;
}

function encontrarMinimo() {
  const numerosStr = document.getElementById("numeros").value;
  const respuesta = document.getElementById("resp");

  const numeros = numerosStr.split(';').map(num => parseFloat(num.trim()));
  let minimo = numeros[0]; 

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < minimo) {
      minimo = numeros[i]; 
    }
  }

  respuesta.innerHTML = `El número mínimo es: ${minimo}`;
}

function sumaDigitos() {
  const numeroStr = document.getElementById("numero").value;
  const respuesta = document.getElementById("resp");

  let suma = 0;
  for (let i = 0; i < numeroStr.length; i++) {
    suma += parseInt(numeroStr[i]); 
  }

  respuesta.innerHTML = `Suma de los dígitos: ${suma}`;
}

function cuadradosDeArreglo() {
  const arregloStr = document.getElementById("arreglo").value;
  const respuesta = document.getElementById("resp");

  const arreglo = arregloStr.split(';').map(num => parseFloat(num.trim()));
  const cuadrados = [];

  for (let i = 0; i < arreglo.length; i++) {
    cuadrados.push(arreglo[i] * arreglo[i]); 
  }

  respuesta.innerHTML = `Arreglo de cuadrados: [${cuadrados.join(', ')}]`;
}
