app.controller("timerController", ['$scope','$rootScope','Timer',function($scope, $rootScope, Timer) {
	$timer = new Timer();
	$scope.timer = $timer;
	$scope.startTimer = function(timeInMilliSeconds) {
		$timer.start(timeInMilliSeconds);
	}
	$scope.resetTimer = function() {
		$timer.stop();
	}
	$scope.restartTimer = function() {
		$timer.restart();
	}
	$rootScope.$on("TEST_STARTED",function(){
		$scope.startTimer(60 * 1000);
	})
}]);