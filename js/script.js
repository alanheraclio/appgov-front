console.log("login script running!!!");

// ADMIN
// USER: admin
// PASS: 4321

// USER
// USER: user
// PASS: 1234

let userEmail = "";
let userPass = "";

function validateUser(){
	event.preventDefault();
	userEmail = document.getElementById("user-email").value;
	userPass = document.getElementById("user-pass").value;

	if (userEmail == "admin" && userPass == "4321") {
		// alert("you are admin!");
		location.replace("http://159.65.98.32/appgov-front/table.html");
	}
	else if (userEmail == "user" && userPass == "1234") {
		location.replace("http://159.65.98.32/appgov-front/table2.html");
		// alert("you are user!");
	}
	else{
	alert("Credenciales Incorrectas");
	}
}