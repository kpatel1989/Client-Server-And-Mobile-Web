<?php

	function our_sql_connect ($srv, $usr, $pwd, $database ) {
		$conn = mysqli_connect($srv,$usr, $pwd, $database);
		return $conn;
	}
	
	function our_sql_connect_no_parameters() {
		$servername = "localhost";
		$username = "root";
		$password = "";
		$db = "HR";
		
		$conn = our_sql_connect($servername, $username, $password, $db);
		
		if ($conn->connect_error) {
			die ("Connection failed: " . $conn->connect_error);
		}
		
		return $conn;
		
		
		
	}

?>
