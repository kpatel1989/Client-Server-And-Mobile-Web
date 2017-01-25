var app = angular.module("quizApp",[]);

app.service("quizService",function($http,$q){
	this.getData = function() {
		var defer = $q.defer();
		$http.get("/api/quiz-data.json")
			.then(function(res) {
				defer.resolve(res);
			});
		return defer.promise;
	}
});

app.controller("quizAppController", ['$scope','quizService',function($scope,quizService) {
	$scope.quizData = null;
	var defer = quizService.getData();
	defer.then(function(res){
		$scope.quizData = res.data;
	});
	$scope.quiz = {
		name : "Javascript",
		showRegister : false,
		showHome : true
	};
	
}]);

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

app.directive("quizregister",function() {
		return {
		restrict: 'AE',
		templateUrl: '/templates/quiz-register.html',
		link: function(scope, elem, attr) {
			scope.start = function() {
				console.log("start");
				scope.id = 0;
				scope.quiz.showRegister = false;
				//scope.getQuestion();
			};
			scope.reset = function() {
				console.log("reset");
				scope.score = 0;
			}
		}

	}
});
