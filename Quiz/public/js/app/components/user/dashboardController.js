app.controller('DashboardController', ['$scope','$rootScope','User','$localStorage', function($scope, $rootScope, User, $localStorage){
		$scope.user = $localStorage.userData;
}])