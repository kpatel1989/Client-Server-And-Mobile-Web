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
	<script type="text/javascript" src="/js/script-home.js"></script>
</head>
<body ng-app="quizApp">
	<div class="container">
		<h1 class="text-center"> Welcome to the online quiz application</h1>
		<div class="container" ng-controller="quizAppController">
			<quizhome></quizhome>
			<quizregister></quizregister>
		</div>
	</div>
</body>
</html>