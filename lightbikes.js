var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
var x = 0;
var y = 0;


function loop(){
  
ctx.fillRect(50,50,50,50);
x++;
setTimeout(loop,200)
  
}
loop();
