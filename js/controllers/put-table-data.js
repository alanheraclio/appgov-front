console.log("put-table-data Running...");
let url7 = "http://159.65.98.32/api/obras/";
let urlPUT = "";

//PRSENT/UPDATE VALUES
function reply_click(recordId)
{
 document.getElementById("exampleModalLongTitle").innerHTML = "Progreso: No. "+recordId;
 // document.getElementById("numero-archivo"+clicked_id).value = "Progreso: No. "+clicked_id;
}

//GET FORM DATA FOR POST FUNCTION
function getFormData(recordId)
{
 var thisId = recordId.replace("update-", "");
 document.getElementById("myLargeModalLabel").innerHTML = "Actualizar Registro: "+thisId;
 document.getElementById("registro-archivo").value = document.getElementById("numero-archivo"+thisId).innerHTML;
 document.getElementById("registro-expediente").value = document.getElementById("numero-expediente"+thisId).innerHTML;
 document.getElementById("registro-localidad").value = document.getElementById("localidad"+thisId).innerHTML;
 document.getElementById("registro-numero-obra").value = document.getElementById("numero-obra"+thisId).innerHTML;
 document.getElementById("guardar-registro").style.display = 'none';
 document.getElementById("actualizar-registro").style.display = 'block';
 urlPUT = url7 + thisId;
}

function updateValues(){

	var archivo = document.getElementById("registro-archivo").value;
	var gaveta = document.getElementById("registro-gaveta").value;
	var expediente = document.getElementById("registro-expediente").value;
	var localidad = document.getElementById("registro-localidad").value;
	var registro_de_oficios = document.getElementById("registro-oficios").value;
	// fuente_financiera = document.getElementById("registro-fuente-financiera").value;
	var fuente_financiera = document.getElementById("registro-fuente-financiera").options[document.getElementById("registro-fuente-financiera").selectedIndex].text;
	var no_obra = document.getElementById("registro-numero-obra").value;
	// ejercicio = document.getElementById("registro-ejercicio").value;
	var ejercicio = document.getElementById("registro-ejercicio").options[document.getElementById("registro-ejercicio").selectedIndex].text;
	// inicio_programado = document.getElementById("registro-inicio-programado").value;
	var termino_programado = document.getElementById("registro-termino-programado").value;

var data = {
    archivo: archivo,
    gaveta: gaveta,
    expediente: expediente,
    localidad: localidad,
    registro_de_oficios: registro_de_oficios,
    fuente_financiera: fuente_financiera,
    no_obra: no_obra,
    ejercicio: ejercicio,
    // inicio_programado: inicio_programado,
    termino_programado: termino_programado
};

	fetch(urlPUT, {
	  method: 'PUT',
	  body: JSON.stringify(data),
	  headers:{
	    'Content-Type': 'application/json'
	  }
	}).then(res => res.json())
	.catch(error => console.error('Error:', error))
	.then(response => console.log('Success:', response));

	alert("¡datos actualizados! en: "+urlPUT);
}