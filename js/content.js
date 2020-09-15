var contentText = '';

var lengthText = 0;

function retriveGet(content){
    contentText = content;
    console.log(contentText);
}
function updateText(cible, direction){
    if (direction < 0 && lengthText > 0) {lengthText -= 2 }
    if (direction > 0 && lengthText <= contentText.length ){lengthText  += 2 }
    document.getElementById("content").innerHTML = contentText.substring(0,lengthText);
    console.log(contentText)
}

ajaxGet("./presentation.txt", retriveGet)