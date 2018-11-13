let url5 = 'http://159.65.98.32/api/obras';

var data = {
    archivo: "test",
    gaveta: "test",
    expediente: "test",
    localidad: "test",
    registro_de_oficios: "test",
    fuente_financiera: "test",
    no_obra: "test",
    ejercicio: "test",
    termino_programado: "2019-12-12",
    inicio_programado: "2018-12-12"
};

fetch(url5, {
  method: 'POST',
  body: JSON.stringify(data),
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));