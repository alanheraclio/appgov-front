console.log("put-table-data Running...");

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
}
