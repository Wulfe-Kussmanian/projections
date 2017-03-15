var titlehover = false;
var headerMenuOpen = false;

function checkWidth(){
    var w = window.innerWidth;
    if(w < 900){
        $("#header-desktop").css('visibility', 'hidden');
        $("#header-mobile").css('visibility', 'visible');
        if(w < 360){
            $("#title-word").css('visibility', 'hidden');
        }else{
            $("#title-word").css('visibility', 'visible');
        }
    }else{
        $("#header-mobile").css('visibility', 'hidden');
        $("#header-desktop").css('visibility', 'visible');
        if(headerMenuOpen){
            headerMenuOpen = false;
            $("#header-mobile-menu").css('visibility', 'hidden');
            $("#body").css('overflow', 'auto');
        }
    }
}

window.onload = function(){checkWidth();}
window.onresize = function(){checkWidth();}

document.getElementById("title").onmouseenter = function(){
    if(!titlehover){
        titlehover = true;
        $("#title-word").animate({left: "10px"}, 150);
        setTimeout(function(){
            $("#title-word").animate({left: "0px"}, 150);
            titlehover = false;
        }, 150);
    }
}
document.getElementById("header-menu-button").onclick = function(){
    if(!headerMenuOpen){
        headerMenuOpen = true;
        $("#header-mobile-menu").css('visibility', 'visible');
        //this.innerHTML = "close";
        $("#header-menu-button").removeClass("fa-bars");
        $("#header-menu-button").addClass("fa-times");
        $("#body").css('overflow', 'hidden');
    }else{
        headerMenuOpen = false;
        $("#header-mobile-menu").css('visibility', 'hidden');
        //this.innerHTML = "menu";
        $("#header-menu-button").removeClass("fa-times");
        $("#header-menu-button").addClass("fa-bars");
        $("#body").css('overflow', 'auto');
    }
}
