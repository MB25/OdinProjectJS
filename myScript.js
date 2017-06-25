$(document).ready(function() {
	draw(4);
	$( "td" ).mouseenter(function(){
		console.log("color: ", $(this).attr("bgcolor"));
		
		if($(this).attr("bgcolor") == 'black'){
			$(this).attr('bgcolor','white');
		}else{
			$(this).attr('bgcolor','black');
		}
	});	
});





function askForSize(){
	var n = prompt("How many rows/cols?", 4);
	var elem = document.getElementById('tab');
  	elem.parentNode.removeChild(elem);
  	draw(n);
	$( "td" ).mouseenter(function(){
		console.log("color: ", $(this).attr("bgcolor"));
		
		if($(this).attr("bgcolor") == 'black'){
			$(this).attr('bgcolor','white');
		}else{
			$(this).attr('bgcolor','black');
		}
	});	
}





function draw(n){
	var m = n;
	var html = "<table id='tab'>"; 
	for(var i = 0; i<n; i++){
		html += "<tr>";
		for(var j = 0; j<m;j++){
			if((i%2==0 && j%2==0) || (i%2==1 && j%2==1)) {
				html+= "<td bgcolor = 'white'></td>";
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