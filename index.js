const { celular } = require('./celular'); // Importa el objeto celular usando desestructuración

// Función que muestra la descripción del celular utilizando template literals
const mostrarDescripcion = () => {
  console.log(`Mi celular es un ${celular.marca} ${celular.modelo} de color ${celular.color}.
  Tiene ${celular.memoria} de memoria y una cámara de ${celular.camara}.
  Lo compré el ${celular.fechaDeCompra}.`);
};

mostrarDescripcion();

// Ejemplo de callback utilizando funciones de flecha
const operacion = (num1, num2, callback) => {
  console.log(`Operando con ${num1} y ${num2}`);
  callback(num1, num2);
};

// Función de flecha como callback
const suma = (a, b) => console.log(`La suma es: ${a + b}`);

// Usar la función con el callback
operacion(5, 3, suma);
