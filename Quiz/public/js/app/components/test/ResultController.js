app.controller("ResultController", ['$scope','$rootScope', "User", "UserTest", "QuizModel", "$location",
	function($scope,$rootScope,User,UserTest,QuizModel,$location) {
		$scope.go = function ( path ) {
		  $location.path( path );
		};
		$scope.date = new Date();
		$scope.userTest = $rootScope.userTest;
		$scope.quizName = $rootScope.quizName;
		
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