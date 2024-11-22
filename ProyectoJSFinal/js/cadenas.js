function concatenarNombreApellido() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
  
    let resultado = "";
    
    for (let i = 0; i < nombre.length; i++) {
        resultado += nombre[i];
    }
    resultado += " ";
    for (let i = 0; i < apellido.length; i++) {
        resultado += apellido[i];
    }
  
    document.getElementById("resp1").innerHTML = resultado;
  }
  

function compararFrases() {
  const frase1 = document.getElementById("frase1").value;
  const frase2 = document.getElementById("frase2").value;

  let sonIguales = true;
  let resultado = "";

  for (let i = 0; i < Math.max(frase1.length, frase2.length); i++) {
      if (frase1[i] !== frase2[i]) {
          sonIguales = false;
          resultado = frase1[i] > frase2[i] ? 
              "La primera frase es mayor que la segunda." : 
              "La primera frase es menor que la segunda.";
          break;
      }
  }

  if (sonIguales) {
      resultado = "Las frases son iguales.";
  }

  document.getElementById("resp2").innerHTML = resultado;
}

function generarEspaciado() {
  const palabra = document.getElementById("palabra").value;

  let resultado = "";
  for (let i = 0; i < palabra.length; i++) {
      resultado += palabra[i];
      if (i !== palabra.length - 1) {
          resultado += " ";
      }
  }

  document.getElementById("resp3").innerHTML = resultado;
}

function mostrarCodigoASCII() {
  const frase = document.getElementById("fraseASCII").value;
  let resultado = "";

  for (let i = 0; i < frase.length; i++) {
      resultado += frase[i] + ": " + frase.charCodeAt(i) + "<br>";
  }

  document.getElementById("resp4").innerHTML = resultado;
}

function invertirPalabra() {
  const frase = document.getElementById("fraseInvertida").value;

  let resultado = "";
  for (let i = frase.length - 1; i >= 0; i--) {
      resultado += frase[i];
  }
  document.getElementById("resp5").innerHTML = resultado;
        }

function contarVocales() {
  const texto = document.getElementById("textoVocales").value.toLowerCase();
  const vocales = "aeiou";
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      contador++;
    }
  }

  document.getElementById("resultadoVocales").innerHTML = `El texto tiene ${contador} vocal(es).`;
}

function contarLetrasAlfabeto() {
    const texto = document.getElementById("textoLetras").value.toLowerCase();
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    let contador = 0;
  
    for (let i = 0; i < texto.length; i++) {
      if (alfabeto.includes(texto[i])) {
        contador++;
      }
    }
  
    document.getElementById("resultadoLetras").innerHTML = `El texto tiene ${contador} letra(s) del alfabeto.`;
  }
  function contarDigitos() {
    const texto = document.getElementById("textoDigitos").value;
    let contador = 0;
  
    for (let i = 0; i < texto.length; i++) {
      if (!isNaN(texto[i]) && texto[i].trim() !== "") {
        contador++;
      }
    }
  
    document.getElementById("resultadoDigitos").innerHTML = `El texto tiene ${contador} dígito(s).`;
  }
  function contarSignosPuntuacion() {
    const texto = document.getElementById("textoSignos").value;
    const signos = ".,;:!?\"'()[]{}-";
    let contador = 0;
  
    for (let i = 0; i < texto.length; i++) {
      if (signos.includes(texto[i])) {
        contador++;
      }
    }
  
    document.getElementById("resultadoSignos").innerHTML = `El texto tiene ${contador} signo(s) de puntuación.`;
  }

  function contarPalabras() {
    const texto = document.getElementById("textoPalabras").value.trim(); 
    let contador = 0;
    let dentroDePalabra = false;
  
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] !== ' ') {
        if (!dentroDePalabra) {
          contador++;
          dentroDePalabra = true;
        }
      } else {
        dentroDePalabra = false;
      }
    }
  
    document.getElementById("resultadoPalabras").innerHTML = `El texto tiene ${contador} palabra(s).`;
  }
  
        