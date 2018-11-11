console.log("post-table-data Running...");

function newRegister(){
  document.getElementById("myLargeModalLabel").innerHTML = "Nuevo Registro";
}

// GETTING VALUES FRO POST FUNCTION
let archivo = "";
let gaveta = "";
let expediente = "";
let localidad = "";
let registro_de_oficios = ""
let fuente_financiera = ""
let no_obra = "";
let ejercicio = "";

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

  var postData = {
    id: 1,
    archivo: archivo,
    gaveta: gaveta,
    expediente: expediente,
    localidad: localidad,
    registro_de_oficios: registro_de_oficios,
    fuente_financiera: fuente_financiera,
    no_obra: no_obra,
    ejercicio: ejercicio
  };

  alert("Numero de Archivo: " + postData.archivo +
        "\nNumero de Gaveta: " + postData.gaveta +
        "\nNumero de Expediente: " + postData.expediente +
        "\nLocalidad: " + postData.localidad +
        "\nRegistro de Oficio: " + postData.registro_de_oficios +
        "\nFuente Financiera: " + postData.fuente_financiera +
        "\nNumero de Obra: " + postData.no_obra +
        "\nEjercicio: " + postData.ejercicio);

  $http.post("159.65.98.32/api/obras", {postData}).success(function(respuesta){
  console.log(respuesta);
});
}


