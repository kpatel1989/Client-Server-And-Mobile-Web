app.factory("QuizModel",['$http',"Question",function($http,Question){
	function QuizModel (questions) {
		this.addQuestions(questions)
		this.questionIndex = 0;
	};
	QuizModel.prototype.questions = null;
	QuizModel.prototype.questionIndex = 0;

	QuizModel.prototype.addQuestions = function(data) {
		this.questions = [];
		var self = this;
		$.each(data.questions,function(index,q) {
			self.questions.push(new Question(q));
		})
	};
	QuizModel.prototype.getQuestion = function(nextIndex) {	
		return this.questions[nextIndex];
	};
	QuizModel.prototype.isLast = function() {
		
	};
	return QuizModel;
}]);
