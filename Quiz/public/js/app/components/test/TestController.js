app.controller("TestController", ['$scope','$rootScope', "User", "UserTest", "QuizModel", "$location",
	function($scope,$rootScope,User,UserTest,QuizModel,$location) {
		$scope.go = function ( path ) {
		  $location.path( path );
		};

		//Display the question number
		$scope.questionNumber=1;

		//Create a UserTest object to save user selected options.
		$rootScope.userTest = new UserTest({
			"user" : $scope.user
		});
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
			$scope.$root.$broadcast("TEST_FINISHED",600);
			var score = $scope.quizModel.compileAnswersToScore($scope.userTest.getSelectedOptions());
			$rootScope.userTest.setScore(score);
			$rootScope.score = score;
			$scope.go('/test/result');
		}

}]);