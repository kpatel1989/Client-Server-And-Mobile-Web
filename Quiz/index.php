<!DOCTYPE html>
<html >
<head>
	<title>Quiz Application</title>
	<meta charset="utf-8">
	<meta description="">
	<link rel="stylesheet" type="text/css" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" media="all" href="/css/style.css">

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
	<script type="text/javascript" src="/js/app/models/userModel.js"></script>
	<script type="text/javascript" src="/js/app/models/userTest.js"></script>

	<script type="text/javascript" src="/js/app/components/home/homeController.js"></script>
	<script type="text/javascript" src="/js/app/components/home/homeDirectives.js"></script>
</head>
<body ng-app="quizApp">
	<nav class="navbar navbar-default hidden-print">
	  <div class="container-fluid">
	    <!-- Brand and toggle get grouped for better mobile display -->
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	        <span class="sr-only">Toggle navigation</span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
	      <a class="navbar-brand" href="#">Javascript Blog Post</a>
	    </div>

	    <!-- Collect the nav links, forms, and other content for toggling -->
	    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	      <ul class="nav navbar-nav navbar-right">
	        <li class="sign-in"><a href="#">Sign in / Register </a></li>
	      </ul>
	    </div><!-- /.navbar-collapse -->
	  </div><!-- /.container-fluid -->
	</nav>
	<div class="container">
		<div class="container" ng-controller="quizAppController">
			<quizhome></quizhome>
			<quizregister></quizregister>
			<quiztest></quiztest>
			<quizresult></quizresult>
		</div>
	</div>
</body>
</html>