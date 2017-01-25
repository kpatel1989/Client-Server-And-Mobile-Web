/**
 * Validates the email and confirm email and returns true if they match, false otherwise.
 * @return bool
 */
function validate(){
	var email = $("#email").val(); //value;
	var confirmEmail = $("#confirmEmail").val() ; // value;
	var errorEmail = $("#errorEmail");
	var errorConfirmEmail = $("#errorConfirmEmail");
	errorEmail.innerText = "";
	errorConfirmEmail.innerText = "";

	if (email.trim() == "") {
		//Emails should not be blank
		//errorEmail.innerText = "Email should not be blank";
		errorEmail.text("Email should not be blank");
		return;
	}
	if (email == confirmEmail) // Emails match..
	{
		// Submit the form
		$("#subscribeForm").submit();
	} else {
		// Emails doesnt match
		// errorConfirmEmail.innerText = "Confirm email should match to email address";
		errorConfirmEmail.text("Confirm email should match to email address");
	}
}

/*
window.$ = function(str) {
	if (str.startsWith("#")) {
		return document.getElementById(str.substr(1));
	} else if (str.startsWith(".")) {
		return document.getElementsByClassName(str.substr(1));
	}
}
*/

window.onload = function() {
	// $("#joinButton").onclick = validate;
}

$(document).ready(function() {
	$("#joinButton").click(function(){
		validate()
	});
});