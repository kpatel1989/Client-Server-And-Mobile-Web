app.factory("QuizModel",['$http',"Question",function($http,Question){
	function QuizModel (questions) {
		var randomizeQuestions = function(ques) {
			var randomNumbers = [];
			var randomQuestions = [];
			while(randomNumbers.length != 10) {
				var num = Math.round(Math.random()*10);
				if (randomNumbers.indexOf(num) == -1) {
					randomNumbers.push(num);
					randomQuestions.push(ques[num]);
				}
			}
			return randomQuestions;
		}
		this.addQuestions(randomizeQuestions(questions.questions));
		this.questionIndex = -1;
	};
	QuizModel.prototype.questions = null;
	QuizModel.prototype.questionIndex = 0;


	QuizModel.prototype.addQuestions = function(data) {
		this.questions = [];
		var self = this;
		$.each(data,function(index,q) {
			self.questions.push(new Question(q));
		})
	};
	QuizModel.prototype.getNextQuestion = function() {
		return this.questionIndex < this.questions.length ? this.questions[++this.questionIndex] : null;
	};
	QuizModel.prototype.isLast = function() {
		return this.questionIndex == this.questions.length - 1;
	};
	QuizModel.prototype.compileAnswersToScore = function(selectedOptions) {
		return this.questions.reduce(function(prev, curr){
			return prev + ((curr.isCorrect(selectedOptions[curr.id])) ? 1 : 0);
		}, 0);
	};
	return QuizModel;
}]);
