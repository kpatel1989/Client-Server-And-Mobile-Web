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

app.directive("quizregister",["UserTest",function(UserTest) {
	return {
		restrict: 'AE',
		templateUrl: '/templates/quiz-register.html',
		link: function(scope, elem, attr) {
			scope.start = function() {
				if (!scope.validateForm()) {
					return false;
				}
				scope.questionNumber=1;
				scope.userTest = new UserTest({
					"user" : scope.user
				});
				scope.questionModel = scope.quizModel.getNextQuestion();
				if  (scope.quizModel.isLast()) {
					scope.isLast = true;
				}
				scope.quiz.showRegister = false;
				scope.quiz.showTest = true;
				// scope.$root.$broadcast("TEST_STARTED",600);
			};
			scope.reset = function() {
				scope.score = 0;
			}
			scope.validateFirstName = function() {
				scope.invalidFirstName = (scope.user.firstName == "")
			}
			scope.validateLastName = function() {
				scope.invalidLastName = (scope.user.lastName == "");
			}
			scope.validateEmailAddress = function() {
				scope.invalidEmailAddress = (scope.user.emailAddress == "");
			}
			scope.validatePhoneNumber = function() {
				scope.invalidPhoneNumber = (scope.user.phoneNumber == "");
			}
			scope.validateAddress = function() {
				scope.invalidAddress = (scope.user.address == "");
			}
			scope.validateForm = function() {
				scope.validateFirstName();
				scope.validateLastName();
				scope.validateEmailAddress();
				scope.validatePhoneNumber();
				scope.validateAddress();
				return !(scope.invalidFirstName && scope.invalidLastName && scope.invalidEmailAddress && scope.invalidPhoneNumber && scope.invalidAddress);
			}
		}
	}
}]);

app.directive("quiztest",function(){
	return {
		restrict: 'AE',
		templateUrl: '/templates/quiz-test.html',
		link: function(scope, elem, attr) {
			scope.nextQuestion = function() {
				scope.questionNumber++;
				scope.questionModel = scope.quizModel.getNextQuestion();
				if  (scope.quizModel.isLast()) {
					scope.isLast = true;
				}
			}
			scope.optionChange = function(value) {
				scope.userTest.attemptQuestion(scope.questionModel.id,parseInt(value));
			}
			scope.submit = function() {
				scope.$root.$broadcast("TEST_FINISHED",600);
				var score = scope.quizModel.compileAnswersToScore(scope.userTest.getSelectedOptions());
				scope.userTest.setScore(score);
				scope.score = score;
				scope.quiz.showTest = false;
				scope.quiz.showResult = true;
			}
		}
	}
});


app.directive("quizresult",function(){
	return {
		restrict: 'AE',	
		templateUrl: '/templates/quiz-result.html',
		link: function(scope, elem, attr) {
			scope.isCorrect = function(question) {
				if (!scope.quiz.showResult) {
					return false;
				}
				return question.isCorrect(scope.userTest.getSelectedOption(question.id));
			} 
		}
	}
});

app.directive("quizcertificate",function(){
	return {
		restrict: 'AE',	
		templateUrl: '/templates/quiz-certificate.html'
	}
});