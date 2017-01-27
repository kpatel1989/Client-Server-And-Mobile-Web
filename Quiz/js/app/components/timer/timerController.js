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
	$scope.startTimer(1 * 1000);
	$rootScope.$on("TEST_FINISHED",function(){
		$scope.resetTimer();
	})
}]);