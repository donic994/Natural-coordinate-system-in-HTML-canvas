var can = document.getElementById("mojePlatno");
//var ctx = canvas.getContext('2d');

function kvadrat(x, y, w, h){
  if(h === undefined || h === null){
    h = w;
  }
  var tocke= [
    [x,y],
    [x+w,y],
    [x+w,y+h],
    [x, y+h]
  ];
  var centar= [
    [x+w/2, y+h/2]
  ]
  return {
    tocke: tocke,
    centar: centar
  };
}

/*
function nacrtajtocke(tocke, centar){
  for(var i=0; i<tocke.length; i++){
    //tocke[i] = rotacija(45, centar, tocke[i] );
    tocke[i] = [tocke[i][0]+centar[0][0], tocke[i][1]+centar[0][1]];
    tocke[i] = translacija(1, 1, tocke[i]);
    tocke[i] = skaliranje(2, 2, tocke[i]);
  }
    crtaj(tocke);


}*/

function nacrtaj(x, y, w, h, boja){
  var obj = kvadrat(x, y, w, h);
  var tocke = obj.tocke;
  var centar = obj.centar;

  ctx.strokeStyle= boja || "#000000";
  nacrtajtocke(tocke, centar);
}


function rotacijaa(kut, centar) {

        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0,[[s[0][0], s[0][1], 1]]);
        ctx.restore();
        ctx.rotate(0.01);
        crtaj();
    }


function pobrisi(){
  ctx.clearRect(0, 0, can.width, can.height);
}

function polar2kartezian(_k){
  var a = 2;
  var theta = 0.1;
  var k = _k || 4;
  var tocke = [];


  for(var theta =0; theta<6.28; theta +=0.01)
  {
    var x = a * Math.cos(k*theta) * Math.cos(theta);
    var y = a * Math.cos(k*theta) * Math.sin(theta);

    var tocka = [x, y];

    tocka = skaliranje(90, 90, tocka);
    tocka = translacija(250, 250, tocka);
    tocke.push(tocka);
  }

  crtaj(tocke);

  var a = 1;
  var theta = 0.1;
  var k = _k || 4;
  var tocke = [];


  for(var theta =0; theta<6.28; theta +=0.01)
  {
    var x = a* Math.cos(k*theta) * Math.cos(theta);
    var y = a * Math.cos(k*theta) * Math.sin(theta);

    var tocka = [x, y];

    tocka = skaliranje(90, 90, tocka);
    tocka = translacija(250, 250, tocka);
    tocke.push(tocka);
  }
  crtaj(tocke);
  var a = 1.5;
  var theta = 0.1;
  var k = _k || 4;
  var tocke = [];


  for(var theta =0; theta<6.28; theta +=0.01)
  {
    var x = a* Math.cos(k*theta) * Math.cos(theta);
    var y = a * Math.cos(k*theta) * Math.sin(theta);

    var tocka = [x, y];

    tocka = skaliranje(90, 90, tocka);
    tocka = translacija(250, 250, tocka);
    tocke.push(tocka);
  }
  crtaj(tocke);
  var a = 0.5;
  var theta = 0.1;
  var k = _k || 4;
  var tocke = [];


  for(var theta =0; theta<6.28; theta +=0.01)
  {
    var x = a* Math.cos(k*theta) * Math.cos(theta);
    var y = a * Math.cos(k*theta) * Math.sin(theta);

    var tocka = [x, y];

    tocka = skaliranje(90, 90, tocka);
    tocka = translacija(250, 250, tocka);
    tocke.push(tocka);
  }
  crtaj(tocke);

}





function zadKvadrat(){
  // Crtanje kvadrata
  function osvjezi(){
    var x = parseFloat(document.getElementById('kordinataX').value);
    var y = parseFloat(document.getElementById('kordinataY').value);
    var a = parseFloat(document.getElementById('duljinaStranica').value);

    var dx = parseFloat(document.getElementById('translacijaX').value);
    var dy = parseFloat(document.getElementById('translacijaY').value);
    var sx = parseFloat(document.getElementById('skaliranjeX').value);
    var sy = parseFloat(document.getElementById('skaliranjeY').value);
    var kut = parseFloat(document.getElementById('rotacija').value);

    pobrisi();

    var obj = kvadrat(x, y, a, a);
    var tocke = obj.tocke;
    var centar = obj.centar;


    for(var i=0; i<tocke.length; i++){
      tocke[i] = rotacija(kut*(3.141592/180), centar, tocke[i]);
      tocke[i] = [tocke[i][0]+centar[0][0], tocke[i][1]+centar[0][1]];
      tocke[i] = translacija(dx, dy, tocke[i]);
      tocke[i] = skaliranje(sx, sy, tocke[i]);
    }

    crtaj(tocke);
  }

  document.getElementById('kordinataX').addEventListener('change', osvjezi);
  document.getElementById('kordinataY').addEventListener('change', osvjezi);
  document.getElementById('duljinaStranica').addEventListener('change', osvjezi);
  document.getElementById('translacijaX').addEventListener('change', osvjezi);
  document.getElementById('translacijaY').addEventListener('change', osvjezi);
  document.getElementById('skaliranjeX').addEventListener('change', osvjezi);
  document.getElementById('skaliranjeY').addEventListener('change', osvjezi);
  document.getElementById('rotacija').addEventListener('change', osvjezi);

  osvjezi();
}

function zadCvijet(){

  polar2kartezian();
}
