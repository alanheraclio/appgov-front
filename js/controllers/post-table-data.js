console.log("post-table-data Running...");
let url4 = 'http://159.65.98.32/api/obras';
function newRegister(){
  document.getElementById("myLargeModalLabel").innerHTML = "Nuevo Registro";
}

// GETTING VALUES FRO POST FUNCTION
let archivo = "";
let gaveta = "";
let expediente = "";
let localidad = "";
let registro_de_oficios = "";
let fuente_financiera = "";
let no_obra = "";
let ejercicio = "";
let inicio_programado = "";
let termino_programado = "";

function printValues(){
  archivo = document.getElementById("registro-archivo").value;
  gaveta = document.getElementById("registro-gaveta").value;
  expediente = document.getElementById("registro-expediente").value;
  localidad = document.getElementById("registro-localidad").value;
  registro_de_oficios = document.getElementById("registro-oficios").value;
  // fuente_financiera = document.getElementById("registro-fuente-financiera").value;
  fuente_financiera = document.getElementById("registro-fuente-financiera").options[document.getElementById("registro-fuente-financiera").selectedIndex].text;
  no_obra = document.getElementById("registro-numero-obra").value;
  // ejercicio = document.getElementById("registro-ejercicio").value;
  ejercicio = document.getElementById("registro-ejercicio").options[document.getElementById("registro-ejercicio").selectedIndex].text;
  inicio_programado = document.getElementById("registro-inicio-programado").value;
  termino_programado = document.getElementById("registro-termino-programado").value;


var data = {
    archivo: archivo,
    gaveta: gaveta,
    expediente: expediente,
    localidad: localidad,
    registro_de_oficios: registro_de_oficios,
    fuente_financiera: fuente_financiera,
    no_obra: no_obra,
    ejercicio: ejercicio,
    inicio_programado: inicio_programado,
    termino_programado: termino_programado
};

  alert("Numero de Archivo: " + data.archivo +
        "\nNumero de Gaveta: " + data.gaveta +
        "\nNumero de Expediente: " + data.expediente +
        "\nLocalidad: " + data.localidad +
        "\nRegistro de Oficio: " + data.registro_de_oficios +
        "\nFuente Financiera: " + data.fuente_financiera +
        "\nNumero de Obra: " + data.no_obra +
        "\nInicio Programado: " + data.inicio_programado +
        "\nTermino Programado: " + data.termino_programado +
        "\nEjercicio: " + data.ejercicio);

fetch(url4, {
  method: 'POST',
  body: JSON.stringify(data),
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

alert("Datos Ingresados correctamente");
location.reload();

}
