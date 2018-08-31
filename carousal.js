  var index=1;
    createList();
    autoslide();
    setInterval(autoslide,10500);
    
    function autoslide(slideto){
        var allImages= document.getElementsByClassName("item");
		var image;
        console.log(allImages);
            for(var i=0; i<allImages.length; i++)
            {
                allImages[i].style.display="none";
				allImages[i].classList.remove("active");
            }
                   
               
                    if(index>allImages.length)
                      index=1;

                    image= allImages[index-1];

                    if(index===1){
                        var imageUrl= "url('"+allImages[allImages.length - 1].src +"')";
                        //console.log(imageUrl);
        //                 $('#carousal-holder').css('background-image', imageUrl);
                        document.getElementById("carousal-holder").style.backgroundImage =imageUrl;
                        document.getElementById("carousal-holder").style.backgroundRepeat = "no-repeat";
                        document.getElementById("carousal-holder").style.backgroundSize = "cover";
                        document.getElementById("carousal-holder").style.backgroundPosition = "center";
                    }
                    else{
                        var imageUrl= "url('"+allImages[(index-1)-1].src+"')"; 
        //                 $('#carousal-holder').cs?s('background-image', imageUrl);
                        document.getElementById("carousal-holder").style.backgroundImage =imageUrl;
                        document.getElementById("carousal-holder").style.backgroundRepeat = "no-repeat";
                        document.getElementById("carousal-holder").style.backgroundSize = "cover";
                        document.getElementById("carousal-holder").style.backgroundPosition = "center";
                    }
                    image.style.display="block";
					//console.log(image);
                    image.classList.add("active");
					
					index++;
                
        };
    
	function arrowslideNext(){
        var slideto;
        var allImages= document.getElementsByClassName("item");
//        console.log(allImages);
		//var element=document.getElementsByClassName("active");
        for(var i=0;  i<allImages.length; i++)
            {
                if(allImages[i].className==="item active")
                {
//                    console.log(i);
                 i===(allImages.length-1) ? (slideto=0): (slideto=i+1);
//                  console.log(slideto);
                break;}
            }
        autoslide(slideto);
		 
	};
    function arrowslidePrevious(){
        var slideto;
        var allImages= document.getElementsByClassName("item");
//        console.log(allImages);
        for(var i=0;  i<allImages.length; i++)
            {
                if(allImages[i].className==="item active")
                {
//                    console.log(i);
                 i===0 ? (slideto=allImages.length-1): (slideto=i-1);
//                 console.log(slideto);
                break;}
            }
       
        autoslide(slideto);
		 
	};
  
 function indicatorslide(i){
	 var indicator=i.target.value;
     console.log(indicator);
    // var slideto=document.getElementById(clickedId).getAttribute("data-slideto");
//     console.log(slideto);
     autoslide(indicator);
 }

    function createList(){
      var allImages= document.getElementsByClassName("item");
      var listLength=allImages.length;
    
		for(var i=0; i<listLength; i++){
				var ul = document.getElementById("indicator-holder");
				var newElement = document.createElement("li");
				newElement.setAttribute('id', i);
				ul.appendChild(newElement);
				
                //newElement.addEventListener('click', indicatorslide(i));              
			     var id = parseInt(newElement.id);
			     newElement.addEventListener('click', function slide(id){
						 //var indicator=(i.target.value);
						 var indicator=id;
						 console.log(allImages[indicator]);
						 autoslide(indicator);
					 });
									
		}
    
}

