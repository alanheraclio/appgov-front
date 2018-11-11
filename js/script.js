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
		location.replace("http://127.0.0.1:8887/table.html");
	}
	else if (userEmail == "user" && userPass == "1234") {
		location.replace("http://127.0.0.1:8887/table2.html");
		// alert("you are user!");
	}
	else{
	alert("Credenciales Incorrectas");
	}
}