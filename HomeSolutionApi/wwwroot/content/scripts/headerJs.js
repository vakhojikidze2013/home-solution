

$(document).ready(function(){
    $("#nav1").click(() => {
        if (isMainPage){
            return;
        }
        
        windowLocationChanger("home");
    });

    $("#nav2").click(() => {
        console.log("Clicked navigation 2")
    });

    $("#nav3").click(() => {
        console.log("Clicked navigation 3")
    });

    $("#nav4").click(() => {
        console.log("Clicked navigation 4")
    });

    $("#nav5").click(() => {
        console.log("Clicked navigation 5")
    });

    $("#nav6").click(() => {
        console.log("Clicked navigation 6")
    });
});
