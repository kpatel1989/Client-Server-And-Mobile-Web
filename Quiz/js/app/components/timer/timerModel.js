app.factory("Timer",["$interval","$rootScope",function($interval,$rootScope){
	var Timer = function() {

	}
	Timer.prototype.time = 0;
	Timer.prototype.startTime = 0;
	Timer.prototype.promise = null;
	Timer.prototype.start = function(timeInMilliSeconds) {
		this.startTime = timeInMilliSeconds;
		this.time = timeInMilliSeconds/1000;
		var self = this;
		this.promise = $interval(function() {
			self.time--;
		}, 1000, self.time);
		this.promise.then(function(){
			$rootScope.$broadcast("TIMER_STOPPED");
		});
	};
	Timer.prototype.restart = function() {
		this.start(this.startTime);
	};
	Timer.prototype.stop = function() {
		$interval.cancel(this.promise);
	}
	return Timer;
}]);