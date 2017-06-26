var colorPalette; 

$(document).ready(function() {
	draw(4);
	$( "td" ).mouseenter(function(){
		console.log("color: ", $(this).attr("bgcolor"));
		colorPalette = returnColorPalette('bw');
		var maxSize = colorPalette.length;
		var counter = Math.round(Math.random())*(maxSize-1);
		

		if($(this).attr("bgcolor") != colorPalette[counter]){
			$(this).attr('bgcolor', colorPalette[counter]);
		}else if((counter<(maxSize-1))){
			console.log("elseif");	
			console.log($(this).attr("bgcolor"));		
			console.log("random value: ", counter);		
			
			$(this).attr('bgcolor', colorPalette[++counter]);
		}else{
			console.log("else");
			console.log($(this).attr("bgcolor"));				
			console.log("random value: ", counter);	
				
			$(this).attr('bgcolor', colorPalette[--counter]);
		}
	});	
});


function returnColorPalette(choice){
	if(choice=='bw'){
		return ['black','white'];
	}else if(choice=='color'){
		return ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
	}else if(choice=='greyscale'){
		return ['#000', '#545454', '#7E7E7E', '#bdbdbd', '#111'];
	}

}


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