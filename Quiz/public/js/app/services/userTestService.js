(function () {
    'use strict';

    app.service('UserTestService', UserTestService);

    UserTestService.$inject = ['$http', '$timeout'];

    function UserTestService($http, $timeout) {
    	var service = {};
    	service.submitTest = function(userTestData) {
            return $http.post("/api/usertest/save",{
                'userTestData' : userTestData
            });
        }

        service.getTestList = function(){
            return $http.get("/api/test/all");
        }

        service.updateTest = function(userTestData) {
            return $http.put('api/user/test/'+userTestData.id, {
                'userTestData' : userTestData
            })
        }
    	return service;
    }

})();