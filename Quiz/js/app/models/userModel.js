app.factory("User",['$http',function($http){
	var User = function(userData) {
		this.firstName = userData.firstName;
		this.lastName = userData.lastName;
		this.emailAddress = userData.emailAddress;
		this.phoneNumber = userData.phoneNumber;
		this.address = userData.address;
	};

	User.prototype.firstName = "",
	User.prototype.lastName = "",
	User.prototype.emailAddress = "",
	User.prototype.phoneNumber = "",
	User.prototype.address = "",

	User.prototype.getUserFullName = function() {
		return this.firstName + " " + this.lastName;
	};
	User.prototype.toJSON = function() {
		return {
			firstName : this.firstName,
			lastName : this.lastName,
			emailAddress : this.emailAddress,
			phoneNumber : this.phoneNumber,
			address : this.address
		}
	}
	return User;
}]);