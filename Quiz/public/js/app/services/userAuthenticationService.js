(function () {
    'use strict';

    app.service('UserAuthenticationService', UserAuthenticationService);

    UserAuthenticationService.$inject = ['$http', '$timeout'];

    function UserAuthenticationService($http, $timeout) {
    	var service = {};
    	service.login = function(userData,callback) {
    		return $http.post("/api/user/authenticate",userData);
    	}
    	service.register = function(userData,callback) {
    		return $http.post("/api/user/register",userData)
    	}
    	return service;
    }

})();