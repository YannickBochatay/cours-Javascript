;(function() {
	
    "use strict";
    
    var input = document.getElementById("titrePage");
            
    input.addEventListener("input",function() {
        
        document.title = this.value;
    });
	
}());