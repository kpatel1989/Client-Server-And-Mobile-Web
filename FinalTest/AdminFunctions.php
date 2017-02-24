<?php
	function DisplayErrors ($msg) {
		if ($msg == "DeleteSuccess") {
			$msg = "Record Deleted";	
		}
		
					
		if ($msg == "DeleteError") $msg = "Error in Deleting Record";		
		if ($msg == "InsertSuccess") $msg = "Record Inserted";
		if ($msg == "InsertError") $msg = "Error in Inserting Record";
		if ($msg == "EditSuccess") $msg = "Record Edited";
		if ($msg == "EditError") $msg = "Error in Editing Record";
		
		print ("<b>$msg<b>");
		
	}
	
	
?>