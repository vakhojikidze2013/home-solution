const screenStepper = 1.6865942028985508;
var scrollSteps = 0;
var defaultBannerCoverPx = 0;
var bannerCoverStep = window.screen.height / 240;
console.log(bannerCoverStep);


var scrollBefore = 0;

// setInterval(() => {
//     console.log(window.scrollY);
// }, 50)

//FOR DECSTOP
window.addEventListener('scroll',function(e){
    const scrolled = window.scrollY;
    
    if (scrolled >= this.window.innerHeight / screenStepper){
        console.log("banner not view")
        return;
    }

    if(scrollBefore > scrolled){
        console.log("ScrollUP");
        scrollBefore = scrolled;
        defaultBannerCoverPx -= bannerCoverStep;
        setBannerMovingPosition(defaultBannerCoverPx)
        scrollSteps--;
    }else{
        scrollBefore = scrolled;
        console.log("ScrollDOWN");
        defaultBannerCoverPx += bannerCoverStep;
        setBannerMovingPosition(defaultBannerCoverPx)
        scrollSteps++;
    }

    if (scrolled == 0){
        defaultBannerCoverPx = 0;
        setBannerMovingPosition(defaultBannerCoverPx);
    }
})



//FOR MOBILE
$(document).on("scrollstart",function(){
    alert("Started scrolling!");
  });


function setBannerMovingPosition(newPos){
    document.getElementsByClassName("banner-cover-img")[0].style = `
    left: 0px;
    top: 0px;
    will-change: transform;
    transform: translate3d(0px, ${newPos}px, 0px);
`
}