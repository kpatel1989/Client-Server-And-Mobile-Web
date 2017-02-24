<!DOCTYPE html>
<head>
	<title>Edit Users</title>
</head>
<body>
	<?php
		require_once("AdminFunctions.php");
		require_once("DBManipFunctions.php");
		
		if (isset($_GET['p'])) {
			$cid = $_GET['p'];
		}
		
		// connect to database
		$conn = our_sql_connect_no_parameters();
		
		if (!isset($_POST['submit'])) {
			$sSQL = "SELECT ID as id, USERNAME, PASSWORD as pwd, SIN FROM users WHERE id = '$cid'";
		
		// execute the command
		$resultSet = mysqli_query($conn, $sSQL);
		$row = mysqli_fetch_array($resultSet);
		
		// create the form to be edited
		print ("<form action='Edit_users.php' method='post'>");
		
 		print ("Username: <br/>
		         <input name='username' value='" . $row['USERNAME'] . "'><br>
		Password: <br/>
		         <input name='password' value='" . $row['pwd'] . "'><br>
		SIN: <br/>
		         <input type='number' name='sin' min=100000001 max=999999999 value='" . $row['SIN'] . "'><br>
		<input type='hidden' name='p' value='$cid'> 
		<input type='submit' name='submit' value='Edit'>
		</form>");        
		
		
		} else {
			// do edit
			$cid = $_POST['p'];
			$uname = $_POST['username'];
			$pass = $_POST['password'];
			$sin = $_POST['sin'];
			
			$sSQL = "UPDATE users SET USERNAME='$uname', PASSWORD='$pass', SIN='$sin' WHERE id='$cid'";
			
			echo "<br/> $sSQL <br/>";
			
			$isUpdate = mysqli_query ($conn, $sSQL);
			
			if ($isUpdate) {
				header ("location: UserAdminHome.php?msg=EditSuccess");
			} else {
				header ("location: UserAdminHome.php?msg=EditError");
			}
			
		}
		
		
	
	
	
	?>
</body>