app.controller("quizAppController", ['$scope','$rootScope', "User",
	function($scope,$rootScope,User) {
		$scope.quizData = null;
		
		// initialize ng-show directive to show home page.
		$scope.quiz = {
			showRegister : false,
			showHome : true
		};
		//create an object of user to connect the registration page
		$scope.user = new User();
		$scope.date = new Date();
		//Timer stop event listener to display submit button.
		$rootScope.$on("TIMER_STOPPED",function(obj,time){
			$scope.isLast = true;
		})
	}
]);