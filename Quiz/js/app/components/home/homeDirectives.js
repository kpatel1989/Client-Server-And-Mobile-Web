app.directive("quizhome",function() {
	return {
		restrict: 'AE',
		templateUrl: '/templates/quiz-home.html',
		link: function(scope,elem,attr) {
			scope.takeAQuiz = function() {
				scope.quiz.showHome = false;
				scope.quiz.showRegister = true;
			}
		}
	}
});

app.directive("quizregister",function() {
	return {
		restrict: 'AE',
		templateUrl: '/templates/quiz-register.html',
		link: function(scope, elem, attr) {
			scope.start = function() {
				scope.id = 0;
				scope.quiz.showRegister = false;
				scope.quiz.showTest = true;
				
				scope.questionModel = scope.quizModel.getQuestion(scope.questionIndex);
				scope.$root.$broadcast("TEST_STARTED",1200);
			};
			scope.reset = function() {
				scope.score = 0;
			}
		}

	}
});

app.directive("quiztest",function(){
	return {
		restrict: 'AE',
		templateUrl: '/templates/quiz-test.html',
		link: function(scope, elem, attr) {
			scope.nextQuestion = function() {
				scope.questionIndex++;
				scope.questionModel = scope.quizModel.getQuestion(scope.questionIndex);
				if  (scope.quizModel.isLast()) {
					scope.isLast = true;
				}
			}
		}
	}
});