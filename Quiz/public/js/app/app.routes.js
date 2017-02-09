app.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
	$routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'templates/quiz-home.html',
            controllerAs: 'vm'
        })
        .when('/test/register', {
            controller: 'TestInstructionController',
            templateUrl: 'templates/quiz-register.html',
            controllerAs: 'vm'
        })
        .when('/test/start', {
            controller: 'TestController',
            templateUrl: 'templates/quiz-test.html',
            controllerAs: 'vm'
        })
        .when('/test/result', {
            controller: 'ResultController',
            templateUrl: 'templates/quiz-result.html',
            controllerAs: 'vm'
        })
        .when('/user/dashboard', {
            controller: 'UserController',
            templateUrl: 'templates/user-dashboard.html',
            controllerAs: 'vm'
        })
        .otherwise({ redirectTo: '/' });
}]);