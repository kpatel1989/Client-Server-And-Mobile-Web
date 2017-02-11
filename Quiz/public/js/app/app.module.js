var app = angular
	.module("quizApp",['ngRoute', 'ngStorage'])
	.run(run);

app.constant = {
	"Test_Time" : 0.1, // 10 mins
    events : {
        testFinished : "TEST_FINISHED",
        timerStopped : "TIMER_STOPPED",
        userSignedIn : "USER_SIGNED_IN"
    }
}


function run($rootScope, $location, $localStorage, $http) {
    // keep user logged in after page refresh
    // 
    if ($localStorage.userData) {
        $http.defaults.headers.common['Authorization'] = $localStorage.userData.sessionId;
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        var openPage = $.inArray($location.path(), ['/']) !== -1;
        if (!openPage && !$localStorage.userData) {
            $location.path('/');
        }
    });
}