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
		for(i=0;i<m;i++) {
			var tr = $("<tr></tr>");
			for(j=0;j<m;j++) {
				var td = $("<td><input type='text' id='cell-"+ i + "-" + j +"' name='cell-"+ i  + j +"' readonly/></td>");
				tr.append(td);
			}
			table.append(tr);
		}
	}

	$("#energize").click(function(){
		var m = parseInt($('#m').val());
		for(i=0;i<m;i++) {
			for(j=0;j<m;j++) {
				randomize(i,j);
			}
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