console.log("table2 script running...");

function action1(){
    alert("check it");
  }
  $( document ).ready(function() {
    setTimeout(function(){ 
      //DANGER
      var today = new Date();
      console.log("today: "+today);
      var mes = today.getUTCMonth() + 1;
      var dia = today.getUTCDate();
      var anio = today.getUTCFullYear();
      var hoy = anio + "-" + mes + "-" + dia;
      // console.log("hoy es: "+hoy);

      totalRows = $("#records-table tbody tr").length;
      console.log(totalRows);

      for (var i = 1; i < totalRows; i++) {
        var domeDate = document.getElementsByTagName("tr")[i].childNodes[9].innerText;
          if (hoy == domeDate.trim()) {
          document.getElementsByTagName("tr")[i].setAttribute("class", "table-danger");
          document.getElementsByTagName("tr")[i].setAttribute("data-toggle", "popover");
          document.getElementsByTagName("tr")[i].setAttribute("title", "¡Se debe Tomar accion rapidamente!");
          // console.log(hoy + "si es igual que:"+domeDate);
      }
      else {
        // console.log(hoy + "no es igual que:"+domeDate);
      }
      }

      //WARNING
      document.getElementsByTagName("tr")[4].setAttribute("class", "table-warning");
      document.getElementsByTagName("tr")[4].setAttribute("data-toggle", "popover");
      document.getElementsByTagName("tr")[4].setAttribute("title", "¡Considere tomar accion proximamente!");
      alert("¡Se debe tomar accion en algunas obras!"); 
    }, 4000);
});