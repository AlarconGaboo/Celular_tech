const moment = require('moment'); // Requerir el módulo moment para trabajar con fechas

// Objeto con las características del celular
const celular = {
  marca: 'Samsung',
  modelo: 'Galaxy S21',
  color: 'Negro',
  memoria: '128GB',
  camara: '108MP',
  fechaDeCompra: moment().format('YYYY-MM-DD'), // Fecha generada por moment
};

// Creo una copia del objeto y actualizo algunas propiedades
const nuevoCelular = {
  ...celular,
  color: 'Blanco', // Actualiza el color
  memoria: '256GB', // Actualiza la memoria
};

console.log(nuevoCelular); // Me muestra la copia del objeto actualizado


// Exporta el objeto celular
module.exports = { celular };
