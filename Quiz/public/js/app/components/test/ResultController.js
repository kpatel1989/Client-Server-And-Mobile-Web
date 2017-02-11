app.controller("ResultController", ['$scope','$rootScope', "User", "UserTest", "QuizModel", "$location", '$localStorage', 
	function($scope,$rootScope,User,UserTest,QuizModel,$location, $localStorage) {
		$scope.go = function ( path ) {
		  $location.path( path );
		};
		$scope.date = new Date();
		$scope.userTest = $rootScope.userTest;
		$scope.quizName = $rootScope.quizName;
		$scope.user = $rootScope.user;
		$localStorage.testFinished = true;
		delete $localStorage.testStarted;
		$scope.isCorrect = function(question) {
			return question.isCorrect($rootScope.userTest.getSelectedOption(question.id));
		}
	}
]);


/**
 * Quiz Certificate handler.
 */
app.directive("quizcertificate",function(){
	return {
		restrict: 'AE',	
		templateUrl: 'templates/quiz-certificate.html'
	}
});