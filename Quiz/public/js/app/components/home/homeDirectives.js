/**
 * Quiz Home directive handler.
 */
app.directive("quizhome",['quizService', "QuizModel", function(quizService, QuizModel) {
	return {
		restrict: 'AE',
		templateUrl: 'templates/quiz-home.html',
		link: function(scope,elem,attr) {
			
			/**
			 * "Take a quiz" button click handler 
			 */
			scope.takeAQuiz = function() {
				var defer = quizService.getData();
				defer.then(onDataReceived);
				scope.quizName= "Javascript";
			}
			scope.takeAJQueryQuiz = function() {
				var defer = quizService.getJqueryData();
				defer.then(onDataReceived);
				scope.quizName = "Jquery";
			}
			var onDataReceived = function(res){
				// initialize the quiz model with data downloaded from service.
				scope.quizModel = new QuizModel(res.data);
				
				// Display Registration page.
				scope.quiz.showHome = false;
				scope.quiz.showRegister = true;
			}
		}
	}
}]);

/**
 * Quiz Register directive handler.
 */
app.directive("quizregister",["UserTest",function(UserTest) {
	return {
		restrict: 'AE',
		templateUrl: 'templates/quiz-register.html',
		link: function(scope, elem, attr) {
			/**
			 * Register button click handler.
			 */
			scope.start = function() {
				// Check if the form is valid.
				if (!scope.validateForm()) {
					return false;
				}
				//Display the question number
				scope.questionNumber=1;

				//Create a UserTest object to save user selected options.
				scope.userTest = new UserTest({
					"user" : scope.user
				});
				//Fetch the next question and check for last question
				scope.questionModel = scope.quizModel.getNextQuestion();
				if  (scope.quizModel.isLast()) {
					scope.isLast = true;
				}
				//Display the test page and hide the registration page.
				scope.quiz.showRegister = false;
				scope.quiz.showTest = true;
			};
			/**
			 * Reset button click handler.
			 */
			scope.reset = function() {
				scope.score = 0;
				scope.invalidFirstName = false;
				scope.invalidLastName = false;
				scope.invalidEmailAddress = false;
				scope.invalidPhoneNumber = false;
				scope.invalidAddress = false;
			}

			/**
			 * Check of first name is valid on firstName textbox blur event. 
			 */
			scope.validateFirstName = function() {
				scope.invalidFirstName = (scope.user.firstName == "")
			}
			
			/**
			 * Check of last name is valid on lastName textbox blur event. 
			 */
			scope.validateLastName = function() {
				scope.invalidLastName = (scope.user.lastName == "");
			}
			
			/**
			 * Check of email address is valid on emailAddress textbox blur event. 
			 */
			scope.validateEmailAddress = function() {
				scope.invalidEmailAddress = !quizRegistrationForm.emailAddress.validity.valid;
			}
			
			/**
			 * Check of phone number is valid on phoneNumber textbox blur event. 
			 */
			scope.validatePhoneNumber = function() {
				scope.invalidPhoneNumber = (scope.user.phoneNumber == "");
			}
			
			/**
			 * Check of address is valid on address textbox blur event. 
			 */
			scope.validateAddress = function() {
				scope.invalidAddress = (scope.user.address == "");
			}
			
			/**
			 * Check if all the fields in the form are valid on submit button click. 
			 */
			scope.validateForm = function() {
				scope.validateFirstName();
				scope.validateLastName();
				scope.validateEmailAddress();
				scope.validatePhoneNumber();
				scope.validateAddress();
				return !(scope.invalidFirstName || scope.invalidLastName || scope.invalidEmailAddress || scope.invalidPhoneNumber || scope.invalidAddress);
			}
		}
	}
}]);

/**
 * Quiz Test directive handler.
 */
app.directive("quiztest",function(){
	return {
		restrict: 'AE',
		templateUrl: 'templates/quiz-test.html',
		link: function(scope, elem, attr) {
			/**
			 * Next Question button click hanler
			 */
			scope.nextQuestion = function() {
				scope.questionNumber++;
				scope.questionModel = scope.quizModel.getNextQuestion();
				if  (scope.quizModel.isLast()) {
					scope.isLast = true;
				}
			}

			/**
			 * Submit button click listener.
			 */
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

/**
 * QuizResult directive handler.
 */
app.directive("quizresult",function(){
	return {
		restrict: 'AE',	
		templateUrl: 'templates/quiz-result.html',
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

/**
 * Quiz Certificate handler.
 */
app.directive("quizcertificate",function(){
	return {
		restrict: 'AE',	
		templateUrl: 'templates/quiz-certificate.html'
	}
});