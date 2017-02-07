/**
 * Creates a User Model class.
 */
app.factory("User",['$http',function($http){
	var User = function(userData) {
		if (!userData) {
			return;
		}
		this.id = userData.id || null;
		this.firstName = userData.firstName;
		this.lastName = userData.lastName;
		this.emailAddress = userData.emailAddress;
		this.phoneNumber = userData.phoneNumber;
		this.address = userData.address;
	};

	User.prototype.id = null,
	User.prototype.firstName = "",
	User.prototype.lastName = "",
	User.prototype.emailAddress = "",
	User.prototype.phoneNumber = "",
	User.prototype.address = "",

	/**
	 * Returns the full username
	 */
	User.prototype.getUserFullName = function() {
		return this.firstName + " " + this.lastName;
	};

	/**
	 * Converts the object into a json object.
	 */
	User.prototype.toJSON = function() {
		return {
			id : this.id,
			firstName : this.firstName,
			lastName : this.lastName,
			emailAddress : this.emailAddress,
			phoneNumber : this.phoneNumber,
			address : this.address
		}
	}
	return User;
}]);