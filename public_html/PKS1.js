var can = document.getElementById("mojePlatno");
var ctx = can.getContext('2d');

//zadatak
function crtaj(tocke, boja) {
  ctx.strokeStyle= boja || "#000000";
  if(tocke.length > 0){
    ctx.beginPath();
    ctx.moveTo(tocke[0][0],tocke[0][1]);
    for(var i=1; i<tocke.length; i++){
      ctx.lineTo(tocke[i][0], tocke[i][1]);
    }
    ctx.lineTo(tocke[0][0], tocke[0][1]);
    ctx.stroke();
  } else {
    console.error('nema tocki');
  }
}
