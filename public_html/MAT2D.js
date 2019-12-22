var can = document.getElementById("mojePlatno");
//var ctx = canvas.getContext('2d');

function identiteta(){
  var identiteta = [[1,0,0], [0,1,0], [0,0,1]];
}

//translacija
function translacija(dx, dy, s){
  var m1 = [[1,0,0], [0,1,0], [dx,dy,1]];
  var m2 = [[s[0], s[1], 1]];
  var m = mnozenje(m1, m2);
  return [m[0][0], m[0][1]];
}

//rotacija
function rotacija(kut, s, tocke){
  var kut_stupnjevi = kut * Math.PI /180;
  var cosfi = Math.cos(kut);
  var sinfi = Math.sin(kut);
  var m1 = [[cosfi,-sinfi,0], [sinfi,cosfi,0], [0,0,1]];
  var m2 = [[tocke[0]-s[0][0], tocke[1]-s[0][1], 1]];
  var m = mnozenje(m1, m2);
  return [m[0][0], m[0][1]];
}

//skaliranje
function skaliranje(sx, sy, s){
  var m1 = [[sx,0,0],[0,sy,0],[0,0,1]];
  var m2 = [[s[0], s[1], 1]];
  var m = mnozenje(m1, m2);
  return [m[0][0], m[0][1]];

}
//množenje matrica
function mnozenje(m1, m2){
  var rezultat = [];
    for(var j = 0; j < m2.length; j++) {
        rezultat[j] = [];
        for(var k = 0; k < m1[0].length; k++) {
            var sum = 0;
            for(var i = 0; i < m1.length; i++) {
                sum += m1[i][k] * m2[j][i];
            }
            rezultat[j].push(sum);
        }
    }
    return rezultat;
}
