//1 tarjeta
function mostrarResultado(respuesta) {
  const resultado = document.getElementById('resultado');
  if (respuesta === 'correcto') {
      resultado.textContent = '✅ ¡Correcto! Este código calcula el total aplicando un descuento y el IVA.';
      resultado.className = 'resultado correcto';
  } else {
      resultado.textContent = '❌ Incorrecto. Este código también aplica descuentos y no solo calcula el IVA.';
      resultado.className = 'resultado incorrecto';
  }
}


//2 tarjeta
function verificarRespuesta() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '3';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! La línea 3 tiene un error 🎉</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}
//3
function mostrarResultado(respuesta) {
  const resultado = document.getElementById('resultado');
  if (respuesta === 'correcto') {
      resultado.textContent = '✅ ¡Correcto! El código cuenta las vocales correctamente.';
      resultado.style.color = '#00ff00'; // Verde
  } else {
      resultado.textContent = '❌ Incorrecto. Este código no elimina vocales ni las convierte a mayúsculas.';
      resultado.style.color = '#ff4444'; // Rojo
  }
}

//4 tarjeta
function Númeromáximo(respuesta) {
  const resultado = document.getElementById('resultado');

  if (respuesta === 'linea3') {
      resultado.textContent = '✅ ¡Correcto! El error original estaba en la línea 3: debía usarse "<" en lugar de "<=".';
      resultado.className = 'resultado correcto';
  } else {
      resultado.textContent = '❌ Incorrecto. Intenta de nuevo, el error no está en esta línea.';
      resultado.className = 'resultado incorrecto';
  }
}

//5 tarjeta
function Calcularpromedio(respuesta) {
  const resultado = document.getElementById('resultado');
  const lineasConErrores = 2; // Hay 2 errores en el código.

  if (respuesta === lineasConErrores.toString()) {
      resultado.textContent = '✅ ¡Correcto! Hay 2 errores: en la línea 3 (bucle) y la línea 5 (propiedad de longitud).';
      resultado.className = 'resultado correcto';
  } else {
      resultado.textContent = `❌ Incorrecto. Hay ${lineasConErrores} errores, sigue intentándolo.`;
      resultado.className = 'resultado incorrecto';
  }
}

//6 tarjeta
function validarRespuesta() {
  const opciones = document.getElementsByName('respuesta');
  let seleccion = null;

  for (const opcion of opciones) {
      if (opcion.checked) {
          seleccion = opcion.value;
          break;
      }
  }

  const resultado = document.getElementById('resultado');
  if (!seleccion) {
      resultado.textContent = '❌ Por favor selecciona una respuesta.';
      resultado.className = 'resultado incorrecto';
      return;
  }

  if (seleccion === '3') {
      resultado.textContent = '✅ ¡Correcto! El código cuenta los dígitos en la frase.';
      resultado.className = 'resultado correcto';
  } else {
      resultado.textContent = '❌ Incorrecto. Este código cuenta los dígitos en la frase.';
      resultado.className = 'resultado incorrecto';
  }
}
//7 ejercicio 

function primerosNumeros(respuesta) {
  const resultado = document.getElementById('resultado');
  if (respuesta === 'correcto') {
      resultado.textContent = '✅ ¡Correcto! Bien hecho.';
      resultado.style.color = '#00ff00'; // Verde
  } else {
      resultado.textContent = '❌ Incorrecto. Intenta de nuevo.';
      resultado.style.color = '#ff4444'; // Rojo
  }
}
///8
function Celsius() {
  const opciones = document.getElementsByName('respuesta');
  let seleccion = null;

  for (const opcion of opciones) {
      if (opcion.checked) {
          seleccion = opcion.value;
          break;
      }
  }

  const resultado = document.getElementById('resultado');
  if (!seleccion) {
      resultado.textContent = '❌ Por favor selecciona una respuesta.';
      resultado.className = 'resultado incorrecto';
      return;
  }

  if (seleccion === '2') {
      resultado.textContent = '✅ ¡Correcto! La fórmula es: Fahrenheit = (Celsius * 9/5) + 32';
      resultado.className = 'resultado correcto';
  } else {
      resultado.textContent = '❌ Incorrecto. La fórmula correcta es: Fahrenheit = (Celsius * 9/5) + 32';
      resultado.className = 'resultado incorrecto';
  }
}
//9
function palindromocad() {
  const opciones = document.getElementsByName('respuesta');
  let seleccion = null;

  for (const opcion of opciones) {
      if (opcion.checked) {
          seleccion = opcion.value;
          break;
      }
  }

  const resultado = document.getElementById('resultado');
  if (!seleccion) {
      resultado.textContent = '❌ Por favor selecciona una respuesta.';
      resultado.className = 'resultado incorrecto';
      return;
  }
  if (seleccion === '2') {
      resultado.textContent = '✅ ¡Correcto! El código verifica si la cadena es un palíndromo.';
      resultado.className = 'resultado correcto';
  } else {
      resultado.textContent = '❌ Incorrecto. El código verifica si la cadena es un palíndromo.';
      resultado.className = 'resultado incorrecto';
  }
}







