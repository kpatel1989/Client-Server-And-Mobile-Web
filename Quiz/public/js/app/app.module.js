var app = angular
	.module("quizApp",['ngRoute', 'ngStorage']);
	
app.constant = {
	"Test_Time" : 0.01, // 10 mins
    events : {
        testFinished : "TEST_FINISHED",
        timerStopped : "TIMER_STOPPED",
        userSignedIn : "USER_SIGNED_IN"
    }
}
