$(document).ready(function(){
	$("#joinList").click(function(){
		var emailAddress = $("#emailAddress").val();
		var renterEmailAddress = $("#renterEmailAddress").val();
		var firstName = $("#firstName").val();
		var emailRegEx = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]+/gi;
		if (!emailAddress.trim()) {
			$("#email-address-error").html("This should not be blank.");
			return false;
		} else if (!emailRegEx.exec(emailAddress)) {
			$("#email-address-error").html("Invalid Email Address");
			return false;
		} else {
			$("#email-address-error").html("");
		}
		if (emailAddress.toLowerCase() != renterEmailAddress.toLowerCase()) {
			$("#re-email-address-error").html("Should match with email address");
			return false;
		} else {
			$("#re-email-address-error").html("");
		}

		if (!firstName) {
			$("#first-name-error").html("This should not be blank");
			return false;
		}
		return true;
	});
});