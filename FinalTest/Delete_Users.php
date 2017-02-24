<!DOCTYPE html>
<head>
	<title>Delete Users</title>
</head>

<body>
	<?php
		require_once("AdminFunctions.php");
		require_once("DBManipFunctions.php");
		
		$cid = $_GET['p'];
		
		if (!isset($_GET["confirm"])) {
			print ("Creature, do you really want to delete?<a href='Delete_Users.php?confirm=y&p=$cid'>Yes</a>");
			print (" | ");
			print ("<a href='UserAdminHome.php'>No</a>");
		} else {
			// delete user
			$conn = our_sql_connect_no_parameters();
			
			// use parameterized query instead of stm below to protect from sql injection attack
			$sSQL = "DELETE FROM users WHERE id = '$cid'";
			
			$isDeleted = mysqli_query($conn, $sSQL);
			
			if ($isDeleted) {
				header ("location: UserAdminHome.php?msg=DeleteSuccess");
			} else {
				header ("location: UserAdminHome.php?msg=DeleteError");
			}
			
			
			
		}
		
		
	
	?>
	
	
	
</body>