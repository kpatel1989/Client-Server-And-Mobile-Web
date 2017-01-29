app.controller("quizAppController", ['$scope','quizService','$rootScope', "QuizModel", "User",
	function($scope,quizService,$rootScope, QuizModel,User) {
		$scope.quizData = null;
		var defer = quizService.getData();
		defer.then(function(res){
			// initialize the quiz model with data downloaded from service.
			$scope.quizModel = new QuizModel(res.data);
		});

		// initialize ng-show directive to show home page.
		$scope.quiz = {
			showRegister : false,
			showHome : true
		};
		//create an object of user to connect the registration page
		$scope.user = new User();

		//Timer stop event listener to display submit button.
		$rootScope.$on("TIMER_STOPPED",function(obj,time){
			$scope.isLast = true;
		})
	}
]);