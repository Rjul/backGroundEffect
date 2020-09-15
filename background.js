///   Variable Static   ///   Reglage  Deplacement   ///
var vhDeltaUp = 0.1;
var vhDeltaDown = -0.1;
var timeDelta = 10;
var repeatPerScroll = 40;
var minHeigth = 20;
var maxHeigth = 80;


var positionY = maxHeigth;
var heightBack = minHeigth;

var touchScreen;

var page = document.getElementById("page")

var divPart1 = document.getElementById("background");
var divPart2 = document.getElementById("background2");

document.addEventListener('touchstart', function(e) {
    e.stopPropagation(); 
    touchScreen = e.touches[0].clientY;
});



page.addEventListener("touchmove", function scroll(e) {         
    e.stopPropagation(); 
    var touchEvent = e.changedTouches[0].clientY;
    if (touchScreen > touchEvent) {
        console.log('down');
        backgroundMoveParametrage(true)
    } else {
        console.log('up');
        backgroundMoveParametrage(false)
    }
});

page.addEventListener("wheel", function scroll(event) {   
    event.stopPropagation();            
        if (event.deltaY > 0){
            if((heightBack > minHeigth && positionY < maxHeigth)){
                backgroundMoveParametrage(false)
            }
        }
        else{
            if((positionY > minHeigth && heightBack < maxHeigth)){
                 backgroundMoveParametrage(true)
            }
        }  
    }
);


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
        
        if(positionY < minHeigth){positionY=minHeigth;}

        if(positionY > maxHeigth){positionY=maxHeigth;}

        if(heightBack > maxHeigth){heightBack=maxHeigth;}

        if(heightBack < minHeigth){heightBack=minHeigth;}
        
        console.log('VH posision '+positionY);
        console.log('increment Time '+time);
        divPart1.style.height = positionY +"%";
        divPart2.style.height = heightBack+"%";
        },time);
}

