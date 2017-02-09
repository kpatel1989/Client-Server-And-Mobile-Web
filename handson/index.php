<!DOCTYPE html>
<html>
<head>
	<title>Hands on</title>
	<script type="text/javascript" src="jquery.min.js"></script>
	<script type="text/javascript" src="script.js"></script>
	<style type="text/css">
		* {
		    margin-bottom: 5px;
		}
		td {
			border: 1px solid gray;
		}
		td input {
		    border: 0px;
		    padding: 10px;
		    font-size: 30px;
		    width: 55px;
		    height: 55px;
		    box-sizing: border-box;
		    margin: 0px;
    		text-align: right;
		}
		
		table#matrixTable {
		    margin: 20px auto;
		    border-collapse: collapse;
		}
		form {
			text-align: center;
		}
	</style>
</head>
<body>
	<form name="matrix" action="computeMatrix.php" method="post">
		<label >Enter the size of matrix.</label>
		<div>
			<label > M =</label>
			<input type="number" id = "m" value="3" name="m"/>
		</div>
		<input type="button" name="engerize" id="energize" value="Energize...">
		<table id="matrixTable">
			
		</table>
		<input type="submit" name="submit" id="submit">
	</form>
</body>
</html>