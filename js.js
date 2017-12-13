var canvas = document.getElementById("canvas");
var output = document.getElementById("out");
var ctx = canvas.getContext("2d");


var split = 11.0;
var threshhold = 128;
var fillWhite = "⬜";
var fillBlack = "⬛";


ctx.font = "280px Zpix";
ctx.textBaseline = 'top';
updateText();


function convertToEmojiButton(){
    var characterString = document.getElementById("CharacterString").value;
    for(var c = 0; c < characterString.length; c++){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillText(characterString.charAt(c),-25.4,-10);
        displayOutput();
    }
    drawLines();
}


function updateText(){
    var characterString = document.getElementById("CharacterString").value;
    for(var c = 0; c < characterString.length; c++){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillText(characterString.charAt(c),-25.4,-10);
        display();
    }
    drawLines();
}


function displayOutput(){
    for(var y = 0; y < split; y+=1){
        for(var x = 0; x < split; x+=1){
            if(averageBrightness(x,y)){
                output.value = output.value + fillBlack;
                ctx.fillStyle = "#000000";
            } else {
                output.value = output.value + fillWhite;
                ctx.fillStyle = "#FFFFFF";
            }
            ctx.fillRect(x * (canvas.width/split),y * (canvas.height/split),(canvas.width/split),(canvas.height/split));

        }
        output.value = output.value + "\n";
    }
    output.value = output.value + "⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜\n";
    output.value = output.value + "⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜\n";
}


function display(){
    for(var x = 0; x < split; x+=1){
        for(var y = 0; y < split; y+=1){
            if(averageBrightness(x,y)){
                ctx.fillStyle = "#000000";
            } else {
                ctx.fillStyle = "#FFFFFF";
            }
            ctx.fillRect(x * (canvas.width/split),y * (canvas.height/split),(canvas.width/split),(canvas.height/split));
        }
    }
}


function averageBrightness(x, y){
    var xs = x * (canvas.width/split);
    var ys = y * (canvas.height/split);

    var imageData = ctx.getImageData(xs,ys,(canvas.width/split),(canvas.height/split));
    var data = imageData.data;
    var total = 0;

    for(var x2 = 0, length = data.length; x2 < length; x2+=4){
        total += data[x2+3]
    }

    total = total /(data.length/4);
    return total > threshhold;
}



function drawLines() {
    ctx.fillStyle = "#000000";
    for(var x = -0.5; x < canvas.width; x+=(canvas.width/split)) {
        ctx.fillRect(x,0,1,canvas.height);
    }
    for(var y = -0.5; y < canvas.height; y+=(canvas.height/split)) {
        ctx.fillRect(0,y,canvas.width,1);
    }
}


// var canvas = document.getElementById("canvas");
// var output = document.getElementById("out");
// var ctx = canvas.getContext("2d");
//
//
// var split = 11.0;
// var threshhold = 128;
// var fillWhite = "⬜";
// var fillBlack = "⬛";
//
//
// ctx.font = "280px Zpix";
// ctx.textBaseline = 'top';
// updateText();
//
//
// function convertToEmojiButton(){
//     var characterString = document.getElementById("CharacterString").value;
//     for(var c = 0; c < characterString.length; c++){
//         ctx.clearRect(0,0,canvas.width,canvas.height);
//         ctx.fillText(characterString.charAt(c),-25.4,-10);
//         displayOutput();
//     }
// }
//
//
// function chonvImg(){
//     drawLines();
//     displayOutput();
//     drawLines();
// }
//
// function updateText(){
//     var characterString = document.getElementById("CharacterString").value;
//     for(var c = 0; c < characterString.length; c++){
//         ctx.clearRect(0,0,canvas.width,canvas.height);
//         ctx.fillText(characterString.charAt(c),-25.4,-10);
//         display();
//     }
//     drawLines();
// }
//
//
// function displayOutput(){
//     alert("output");
//     for(var y = 0; y < split; y+=1){
//         for(var x = 0; x < split; x+=1){
//             var currentSpot = averageBrightness(x,y);
//             output.value += (output.value + currentSpot.a);
//             ctx.fillStyle = currentSpot.b;
//             ctx.fillRect(x * (canvas.width/split),y * (canvas.height/split),(canvas.width/split),(canvas.height/split));
//         }
//         output.value = output.value + "\n";
//     }
//     output.value = output.value + "⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜\n";
//     output.value = output.value + "⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜\n";
// }
//
//
// function pickImage() {
//     drawDataURIOnCanvas(prompt("Enter URI: ", ""),canvas);
//     function drawDataURIOnCanvas(strDataURI, canvas) {
//         "use strict";
//         var img = new window.Image();
//         img.addEventListener("load", function () {
//             canvas.getContext("2d").drawImage(img, 0, 0);
//         });
//         img.setAttribute("src", strDataURI);
//     }
//     display();
// }
//
// function display(){
//     alert("h");
//     for(var x = 0; x < split; x+=1){
//         for(var y = 0; y < split; y+=1){
//             var current = averageBrightness(x,y);
//             ctx.fillStyle = current.b;
//             ctx.fillRect(x * (canvas.width/split),y * (canvas.height/split),(canvas.width/split),(canvas.height/split));
//         }
//     }
// }
//
//
// function averageBrightness(x, y){
//     var xs = x * (canvas.width/split);
//     var ys = y * (canvas.height/split);
//
//     var imageData = ctx.getImageData(xs,ys,(canvas.width/split),(canvas.height/split));
//     var data = imageData.data;
//     var total = 0;
//
//     var red, blue, green;
//     red = 0; blue = 0; green = 0;
//     var length = data.length;
//     for(var x2 = 0; x2 < length; x2+=4){
//         total += data[x2+3];
//         if(data[x2+3]>0){
//             alert(00);
//         }
//         red += data[x2];
//         green += data[x2+1];
//         blue += data[x2+2];
//         if(blue>0){
//             alert(blue);
//         }
//         if(red>0){
//             alert(red);
//         }
//         if(green>0){
//             alert(green);
//         }
//     }
//     return decideEmoji(red, green, blue, total);
//     //total = total /(data.length/4);
//     //return total > threshhold;
// }
//
// function decideEmoji(red, green, blue, alpha){
//     if(red>128 && blue > 128 && green < 64){
//         return {a:"✝",b:"#D701C1"}; //Purple
//     }
//
//     if(red>128 && green > 128 && blue < 64){
//         return {a:"✴️", b:"#E4A617"}; //Orange
//     }
//
//     if(red>128 && green < 64 && blue < 64){
//         return {a:"🅾️", b:"#CD1616"}; //Red
//     }
//
//     if(red<64 && green > 128 && blue < 64){
//         return {a:"❇️", b:"#32B219"}; //Green
//     }
//
//     if(red<64 && green < 64 && blue > 128){
//         return {a:"🅿️", b:"#2A24D2"}; //Blue
//     }
//
//     if(red > 64 && red < 192 && green < 192 && green > 64 && blue < 192 && blue > 64){
//         return {a:"▶️", b:"#818181"}; //gray
//     }
//
//     if(red>128 && green > 128 && blue > 128){
//         alert("White");
//         return {a:"⬜️", b:"#FFFFFF"}; //white
//     }
//
//     return {a:"⬛️️", b:"#000000"}; //black
//
// }
//
//
//
// function drawLines() {
//     ctx.fillStyle = "#000000";
//     for(var x = -0.5; x < canvas.width; x+=(canvas.width/split)) {
//         ctx.fillRect(x,0,1,canvas.height);
//     }
//     for(var y = -0.5; y < canvas.height; y+=(canvas.height/split)) {
//         ctx.fillRect(0,y,canvas.width,1);
//     }
// }