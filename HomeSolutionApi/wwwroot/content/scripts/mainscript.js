var isMainPage = true;

//Giving a click using jQuery 3.3.1
$(document).ready(function(){
    $(".services").click((info) => {
        let currentClickIdInfo = info.currentTarget.id;
        window.location.href = `servicePage.html?${currentClickIdInfo}`;
        
    });
});