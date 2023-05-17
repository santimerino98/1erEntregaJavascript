// Solicitar puntuación al usuario
let puntuacion = prompt("Ingresa tu puntuación:");

// Convertir la entrada a un número
puntuacion = parseFloat(puntuacion);

// Función para dar una devolución basada en la puntuación
function darDevolucion(puntuacion) {
  if (puntuacion >= 0 && puntuacion <= 49) {
    return "Tu puntuación es insuficiente.";
  } else if (puntuacion >= 50 && puntuacion <= 69) {
    return "Tu puntuación es suficiente.";
  } else if (puntuacion >= 70 && puntuacion <= 89) {
    return "Tu puntuación es buena.";
  } else if (puntuacion >= 90 && puntuacion <= 100) {
    return "¡Excelente puntuación!";
  } else {
    return "Puntuación inválida. Por favor, ingresa un número entre 0 y 100.";
  }
}

// Obtener la devolución y mostrarla en la consola
let devolucion = darDevolucion(puntuacion);
console.log(devolucion);
