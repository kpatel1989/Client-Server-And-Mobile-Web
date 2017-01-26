app.controller("quizAppController", ['$scope','quizService','$rootScope', "QuizModel",function($scope,quizService,$rootScope, QuizModel) {
	$scope.quizData = null;
	var defer = quizService.getData();
	defer.then(function(res){
		$scope.quizModel = new QuizModel(res.data);
	});
	$scope.quiz = {
		showRegister : false,
		showHome : true
	};
	//console.log("Hi");
}]);