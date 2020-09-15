///   Variable Static   ///   Reglage  Deplacement   ///
var vhDeltaUp = 0.1;
var vhDeltaDown = -0.1;
var timeDelta = 10;
var repeatPerScroll = 40;
var positionY = 70;
var heightBack = 15;
var page = document.getElementById("page")

var divPart1 = document.getElementById("background");
var divPart2 = document.getElementById("background2");

function scrollEvent(){
    page.addEventListener("wheel", function scroll(event) {



            
            if (event.deltaY > 0){
                backgroundMoveParametrage(false)
            }
            else{
                backgroundMoveParametrage(true)
            }  
        }
    );
}

function backgroundMoveParametrage(down){
    if (down){        
        var vhDelta = vhDeltaDown;
    }else{
        var vhDelta = vhDeltaUp;
    }
    let i = 0 ;
    var incrementTimeDelta = 0;
    while( i < repeatPerScroll ){
        i++;
        incrementTimeDelta += timeDelta;
        moveBackGround(incrementTimeDelta, vhDelta);
    }
}
function moveBackGround(time, delta){
    setTimeout(() => {
        positionY += delta;
        heightBack -= delta;            
        if(heightBack < 15){heightBack=15;}
        if(positionY < 15){positionY=15;}
        if(heightBack > 70){heightBack=70;}
        if(positionY > 70){positionY=70;}
        console.log('VH posision '+positionY);
        console.log('increment Time '+time);
        divPart1.style.height = positionY +"vh";
        divPart2.style.height = heightBack+"vh";
        },time);
}

scrollEvent();