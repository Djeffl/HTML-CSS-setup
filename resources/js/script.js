setInterval(function() {
  $("span").toggleClass("invisible");
}, 500);

$('document').ready(function(){
    $(".triggerbody").click(function(){
        var pbody = "#" + this.id + "-body";
        console.log(pbody);
        $(pbody).fadeToggle("slow"); 
    }); 
}); 

var leftspace=25;
var zindex = 500;

$("ul li.project").each(function(index) {
    if(index!==0){
        leftspace += 2.5;
    zindex--;
    var css = leftspace + "em";
    
    $(this).css("left", css);
    $(this).css("z-index", zindex);  
    }      
});