app.factory("UserTest",["$http", function($http){
	var UserTest = function(userTestData) {
		this.user = userTestData.user || null;
		this.score = 0;
		this.attemptedQuestions = {};
	}
	UserTest.prototype.userId = null;
	UserTest.prototype.score = null;
	UserTest.prototype.attemptedQuestions = {};
	UserTest.prototype.attemptQuestion = function(questionId, optionSelected) {
		//this.attemptedQuestions[questionId] = optionSelected;
	};
	UserTest.prototype.getSelectedOptions = function() {
		return this.attemptedQuestions;
	};
	UserTest.prototype.getSelectedOption = function(questionId) {
		return this.attemptedQuestions[questionId];
	};
	UserTest.prototype.setScore = function(score) {
		this.score = score;
	};
	UserTest.prototype.getScore = function() {
		return this.score;
	};
	UserTest.prototype.toJSON = function() {
		return {
			id : this.id,
			score : this.score,
			attemptedQuestions : this.attemptedQuestions,
			user: this.user.toJSON()
		}
	}
	return UserTest;
}])