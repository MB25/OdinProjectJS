$(document).ready(function() {
	draw(6);

});

function draw(n){
	var m = n;
	var html = "<table>"; 
	for(var i = 0; i<n; i++){
		html += "<tr>";
		for(var j = 0; j<m;j++){
			if((i%2==0 && j%2==0) || (i%2==1 && j%2==1)) {
				html+= "<td bgcolor = 'black'></td>";
			}
			if((i%2==1 && j%2==0) || (i%2==0 && j%2==1)){
				html+= "<td bgcolor = 'white'></td>";
			}
		}
		html+= "</tr>";
	}	
	html += "</table>";
	$(".grid").append(html);
	console.log(html);
};