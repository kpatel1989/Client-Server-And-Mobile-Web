<!DOCTYPE html>
<html >
<head>
	<title>Quiz Application</title>
	<meta charset="utf-8">
	<meta description="">
	<link rel="stylesheet" type="text/css" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="/css/style.css">

	<script type="text/javascript" src="/node_modules/jquery/dist/jquery.min.js" ></script>
	<script type="text/javascript" src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="/node_modules/angular/angular.js"></script>
	<script type="text/javascript" src="/js/app/app.module.js"></script>
	<script type="text/javascript" src="/js/app/app.services.js"></script>
	
	<script type="text/javascript" src="/js/app/components/timer/timerController.js"></script>
	<script type="text/javascript" src="/js/app/components/timer/timerDirective.js"></script>
	<script type="text/javascript" src="/js/app/components/timer/timerModel.js"></script>
	<script type="text/javascript" src="/js/app/components/timer/timerFilter.js"></script>

	<script type="text/javascript" src="/js/app/models/questionModel.js"></script>
	<script type="text/javascript" src="/js/app/models/questionBankModel.js"></script>
	<script type="text/javascript" src="/js/app/components/home/homeController.js"></script>
	<script type="text/javascript" src="/js/app/components/home/homeDirectives.js"></script>
</head>
<body ng-app="quizApp">
	<div class="container">
		<h1 class="text-center"> Check your knowledge on web development with this skill test.</h1>
		<div class="container" ng-controller="quizAppController">
			<quizhome></quizhome>
			<quizregister></quizregister>
			<quiztest></quiztest>
		</div>
	</div>
</body>
</html>