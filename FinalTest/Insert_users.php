<!DOCTYPE  html>
<head>
	<title> Insert Users</title>
</head>
<body>
	<?php
		require_once("AdminFunctions.php");
		require_once("DBManipFunctions.php");
		
		if (!isset($_POST['submit'])) {
			
			// create the form to be edited
			print ("<form action='Insert_users.php' method='post'>");
			
	 		print ("Username: <br/>
			         <input name='username'><br/>
			Password: <br/>
			         <input type='password' name='password'><br/>
			SIN: <br/>
			         <input type='number' min=100000001 max=999999999 name='sin'><br/>
			<input type='submit' name='submit' value='Insert'>
			</form>");        
		} else {
			// connect to database
			$conn = our_sql_connect_no_parameters();
			
			$uname = $_POST["username"];
			$pass = $_POST["password"];
			$sin = $_POST["sin"];
			
			$sSQL = "INSERT INTO users (username, password,sin) VALUES('$uname','$pass',$sin)";
			
			$isInserted = mysqli_query ($conn, $sSQL);
			
			// mysqli_insert_id($conn)
			// $conn->insert_id->...->
			
			if (isInserted) {
				header("location: UserAdminHome.php?msg=InsertSuccess");
			} else {
				header("location: UserAdminHome.php?msg=InsertSuccess");
			}
		}
		
	?>
</body>