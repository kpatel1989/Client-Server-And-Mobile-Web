<!DOCTYPE html>
<head>
	
</head>
<body>
	<h1>Response Page</h1>
	
	<?php
		phpinfo();
		// name entered via browser
		$name = $_POST["txtUsr"];
		// password entered via browser
		$password = $_POST["txtPass"];
		
		print ("name = " . $name . " password: " . $password . "<br /><br />" );
		// print("<script type='text/javascript'>alert('Jai Bharat!!');</script>");
		
		
		if ($name == "charlie" && $password=="123") {
			print ("<h2 style='color:green'>Welcome to admin mode</h2>");
		} else {
			print ("<h2 style='color:red'>Invalid UserName and Password</h2>");
	?>		
			<a href='login.html'>Try again please</a> 
			       
	<?php
	}
	?>

	
	
</body>