app.factory("Question",['$http',function($http){
	function Question (q) {
		this.id = q.id;
		this.question = q.question;
		this.options = q.options;
		this.answer = q.answer;
	}
	Question.prototype.question = null;
	Question.prototype.options = null;
	Question.prototype.answer = null;
	Question.prototype.isCorrect = function(selectedOption) {
		return selectedOption == this.answer;
	}
	
	return Question;
}]);
