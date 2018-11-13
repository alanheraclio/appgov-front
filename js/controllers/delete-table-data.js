console.log("delete-table-data Running...");
var urlAPI = "http://159.65.98.32/api/obras/";

function deleteRecord(recordId){
  alert("Seguro que deseas borrar el record: "+recordId.replace("delete-", ""));
  function deleteData() {
	  return fetch(urlAPI+recordId.replace("delete-", ""), {
	    method: 'delete'
	  })
	  .then(response => response.json());
	}

	deleteData();
}
