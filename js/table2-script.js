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

      var countWarnings = 0;
      var countDangers = 0;

      for (var i = 1; i < totalRows; i++) {
        var domeDate = document.getElementsByTagName("tr")[i].childNodes[9].innerText;
        var domeDay2 = domeDate.trim();
        var domeDay = new Date(domeDay2);
        var hoyMilisencond = today.getTime();
        var domeDayMilisencond = domeDay.getTime();
        // console.log("hoyMilisencond: "+hoyMilisencond);
        // console.log("domeDayMilisencond: "+domeDayMilisencond);
        var dayDifference = hoyMilisencond - domeDayMilisencond;
        // console.log("dayDifference: "+(dayDifference / 86400000));

      	  if (  ( (dayDifference / 86400000) <= 5 ) && ((dayDifference / 86400000) > 1)  ) {
      	  //WARNING
	      document.getElementsByTagName("tr")[i].setAttribute("class", "table-warning");
	      document.getElementsByTagName("tr")[i].setAttribute("data-toggle", "popover");
	      document.getElementsByTagName("tr")[i].setAttribute("title", "¡Considere tomar accion en 5 dias!");
	      countWarnings = countWarnings + 1;
      	  }
      	  else if (hoy == domeDay2) {
          //DANGER
          document.getElementsByTagName("tr")[i].setAttribute("class", "table-danger");
          document.getElementsByTagName("tr")[i].setAttribute("data-toggle", "popover");
          document.getElementsByTagName("tr")[i].setAttribute("title", "¡Se debe Tomar accion el dia de hoy!");
          countDangers = countDangers + 1;
          // console.log(hoy + "si es igual que:"+domeDate);
      	  }
	      else {
	        // console.log(hoy + "no es igual que:"+domeDate);
	      }
      }
      if (countDangers > 0) {
      	alert("¡Se debe tomar accion en "+countDangers+" obras el dia de hoy!");
      }
      if (countDangers > 0) {
      	alert("¡Se debe tomar accion en "+countWarnings+" obras en 5 dias!");
      }
    }, 4000);
});