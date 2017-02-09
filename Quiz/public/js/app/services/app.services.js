/**
 * Defines a quiz service to download the quiz data.
 */
app.service("quizService",function($http,$q){
	this.getData = function() {
		var defer = $q.defer();
		$http.get("api/quiz/javascript")
			.then(function(res) {
				defer.resolve(res);
			});
		return defer.promise;
	}
	this.getJqueryData = function() {
		var defer = $q.defer();
		$http.get("api/quiz/jquery")
			.then(function(res) {
				defer.resolve(res);
			});
		return defer.promise;
	}
});