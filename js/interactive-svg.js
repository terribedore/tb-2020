$(function(){
    $("#stage").load('TerriVenn.svg',function(response){
        $(this).addClass("svgLoaded");
        if(!response){
            $(this).html('Error loading SVG. Be sure you are running from an http protocol');
            // Error loading SVG!
            // Remember, this only works on a web server or localhost!
        }
    });
});
