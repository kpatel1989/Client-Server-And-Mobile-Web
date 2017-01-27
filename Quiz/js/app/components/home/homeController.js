app.controller("quizAppController", ['$scope','quizService','$rootScope', "QuizModel", "User",
	function($scope,quizService,$rootScope, QuizModel,User) {
		$scope.quizData = null;
		var defer = quizService.getData();
		defer.then(function(res){
			$scope.quizModel = new QuizModel(res.data);
		});
		$scope.quiz = {
			showRegister : false,
			showHome : true
		};
		$scope.user = new User();
		$rootScope.$on("TIMER_STOPPED",function(obj,time){
			$scope.isLast = true;
		})
	}
]);