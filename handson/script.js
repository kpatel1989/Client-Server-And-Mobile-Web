$(document).ready(function(){
	var randomized = false;
	var intervalCount = 0;
	$("#submit").hide();
	$("#m").keypress(generateTable);
	$("#m").change(generateTable);
	generateTable();
	function generateTable() {
		var m = parseInt($('#m').val());
		var table = $("#matrixTable");
		table.empty();
		var tr = $("<tr></tr>"); 
		for(k=0,i=0,j=0;k<m*m;k++,i = parseInt(k / m), j = k % m) {
			var td = $("<td><input type='text' id='cell-"+ i + "-" + j +"' name='cell-"+ i + "-" + j +"' readonly/></td>");
			if (j == 0) {
				tr = $("<tr></tr>");
			}
			tr.append(td);

			table.append(tr);
		}
	}

	$("#energize").click(function(){
		var m = parseInt($('#m').val());
		for(k=0,i=0,j=0;k<m*m;k++,i = parseInt(k / m), j = k % m) {
			randomize(i,j);
		}
	});

	function randomize(row,col) {
		intervalCount += 10;
		for (loop=0;loop<10;loop++) {
			window.setTimeout(function() {
				intervalCount--;
				$("#cell-"+row +"-"+col).val(parseInt(Math.random()*100));
				if (intervalCount == 0) {
					$("#submit").show();
				}
			},parseInt(Math.random() * 10)*20);
		}
	}
});