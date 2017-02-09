<?php
	print_r($_POST);
	$m = $_POST["m"];
	$matrix = array();
	$diagonal = 0;
	$reverseDiagonal = 0;
	for($i=0;$i<$m;$i++) {
		$matrix[$i][$i] = $_POST["cell-".$i."-".$i];
		$diagonal += $matrix[$i][$i];
		$matrix[$i][$m-$i-1] = $_POST["cell-".$i."-".($m-$i-1)];
		$reverseDiagonal += $matrix[$i][$m-$i-1];
	}
	// print_r("Matrix=". implode($matrix));
	print_r("<br/>Diagonal = " . $diagonal);
	print_r("<br/>Reverse Diagonal = " . $reverseDiagonal);

?>