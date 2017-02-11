app.controller("HomeController", ['$scope','$rootScope', "User", "$location",'quizService', 'QuizModel', 
	function($scope,$rootScope,User, $location,quizService,QuizModel) {
		$scope.quizData = null;

		$scope.go = function ( path ) {
		  $location.path( path );
		};

		/**
		 * "Take a quiz" button click handler 
		 */
		$scope.takeAQuiz = function() {
			var defer = quizService.getData();
			defer.then($scope.onDataReceived, function(){
				console.log("error");
			});
			$rootScope.quizName= "Javascript";
		}
		$scope.takeAJQueryQuiz = function() {
			var defer = quizService.getJqueryData();
			defer.then($scope.onDataReceived, function(){
				console.log("error");
			});
			$rootScope.quizName = "Jquery";
		}
		var vm = this;
		$scope.onDataReceived = function(res){
			// initialize the quiz model with data downloaded from service.
			$rootScope.quizModel = new QuizModel(res.data);
			$scope.go('/test/register');
		}
	}
]);