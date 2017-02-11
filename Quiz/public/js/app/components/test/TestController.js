app.controller("TestController", ['$scope','$rootScope', "User", "UserTest", "QuizModel", "$location", '$localStorage', 
	function($scope,$rootScope,User,UserTest,QuizModel,$location, $localStorage) {
		$scope.go = function ( path ) {
		  $location.path( path );
		};
		$localStorage.testStarted = true;
		//Timer stop event listener to display submit button.
		$rootScope.$on(app.constant.events.timerStopped,function(obj,time){
			$scope.isLast = true;
		})

		//Display the question number
		$scope.questionNumber=1;

		//Create a UserTest object to save user selected options.
		$rootScope.userTest = new UserTest();
		
		//Fetch the next question and check for last question
		$scope.questionModel = $rootScope.quizModel.getNextQuestion();
		if  ($scope.quizModel.isLast()) {
			$scope.isLast = true;
		}

		/**
		 * Next Question button click hanler
		 */
		$scope.nextQuestion = function() {
			$scope.questionNumber++;
			$scope.questionModel = $scope.quizModel.getNextQuestion();
			if  ($scope.quizModel.isLast()) {
				$scope.isLast = true;
			}
		}

		/**
		 * Submit button click listener.
		 */
		$scope.submit = function() {
			$scope.$root.$broadcast(app.constant.events.testFinished);
			var score = $scope.quizModel.compileAnswersToScore($scope.userTest.getSelectedOptions());
			$rootScope.userTest.setScore(score);
			$rootScope.score = score;
			$scope.go('/test/result');
		}

}]);