
var x = document.getElementById("myAudio"); 

$("#playTheme").click(function(){
    x.play(); 
})

$("#pauseTheme").click(function(){
    x.pause(); 
})

$("#normal").click(function(){
    $("#theCaptain").removeAttr("style" );
})

$("#grow").click(function(){
    $("#theCaptain").animate({ 
    height: "+=100px",
    width: "+=100px"
 });
})

$("#shrink").click(function(){
    $("#theCaptain").animate({ 
    height: "-=100px",
    width: "-=100px"
 });
})

$("#visible").click(function(){
    $("#theCaptain").show()
})

$("#invisible").click(function(){
    $("#theCaptain").hide()
})

$("#gosomewhere").click(function(){
    $("#theCaptain").animate({
        "z-index": 99,
        top: 0,
        right: 0,


    })
})


$("#moveup").click(function(){
    console.log("skdjfls")
    $("#theCaptain").animate({
        top: "-=30px",
        position: "absolute"
    }, 2000);
})
