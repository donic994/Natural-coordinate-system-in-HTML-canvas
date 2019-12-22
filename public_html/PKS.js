var platno = document.getElementById("mojePlatno");
var kontekst = null;
var cmUpx = 41.795275590551;

function crtanjeDuzina() {
    var promjena = document.getElementById("promjena");
    var platno = document.getElementById("mojePlatno");

    //Promjena visine i širine platna i crtanje osi
    promjena.addEventListener("change", function () {
        platno.height = heightPlatna.value * cmUpx;
        platno.width = widthPlatna.value * cmUpx;
        var centarX = platno.width / 2;
        var centarY = platno.height / 2;

        //Crtanje koordinatnih osi
        var ctx = platno.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(centarX, 0);
        ctx.lineTo(centarX, platno.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, centarY);
        ctx.lineTo(platno.width, centarY);
        ctx.stroke();
        for (i = 0; i <= platno.height; i++) {
            ctx.beginPath();
            ctx.moveTo(i * cmUpx, 0);
            ctx.lineTo(i * cmUpx, platno.height);
            ctx.strokeStyle = 'silver';
            ctx.stroke();
        }
        for (i = 0; i <= platno.width; i++) {
            ctx.beginPath();
            ctx.moveTo(0, i * cmUpx);
            ctx.lineTo(platno.width, i * cmUpx);
            ctx.strokeStyle = 'silver';
            ctx.stroke();
        }


        //Crtanje dužina
        var Ax = document.getElementById("Ax").value * cmUpx;
        var Ay = document.getElementById("Ay").value * cmUpx;
        var Bx = document.getElementById("Bx").value * cmUpx;
        var By = document.getElementById("By").value * cmUpx;

        var korAx = centarX + Ax;
        var korAy = centarY - Ay;

        var korBx = centarX + Bx;
        var korBy = centarY - By;

        ctx.beginPath();
        ctx.moveTo(korAx, korAy);
        ctx.lineTo(korBx, korBy);
        ctx.lineWidth = 3;
        ctx.strokeStyle = "blue";
        ctx.stroke();
    });
}

function fermatSpirala() {
    var promjena = document.getElementById("promjena");
    var platno = document.getElementById("mojePlatno");

    //
    //Promjena visine i širine platna i crtanje osi
    //

    promjena.addEventListener("change", function () {
        platno.height = heightPlatna.value * cmUpx;
        platno.width = widthPlatna.value * cmUpx;
        var centarX = platno.width / 2;
        var centarY = platno.height / 2;

        //
        //Crtanje koordinatnih osi
        //

        var ctx = platno.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(centarX, 0);
        ctx.lineTo(centarX, platno.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, centarY);
        ctx.lineTo(platno.width, centarY);
        ctx.stroke();
        for (i = 0; i <= platno.height; i++) {
            ctx.beginPath();
            ctx.moveTo(i * cmUpx, 0);
            ctx.lineTo(i * cmUpx, platno.height);
            ctx.strokeStyle = 'silver';
            ctx.stroke();
        }
        for (i = 0; i <= platno.width; i++) {
            ctx.beginPath();
            ctx.moveTo(0, i * cmUpx);
            ctx.lineTo(platno.width, i * cmUpx);
            ctx.strokeStyle = 'silver';
            ctx.stroke();
        }

        //
        //Fermatova spirala
        //
        
        var translacija = document.getElementById("translacija").value * (Math.PI / 180);
        function crtajSpiralu(translacija) {
            ctx.lineWidth = 2;
            razmak = 5;
            krugova = 2 * parseFloat(document.getElementById("korak").value) * Math.PI;
            n = 2;
            for (i = 1; i <= n; i++) {
                korijen = 2 * Math.PI / n * i;
                kut = 0;
                ctx.beginPath();
                ctx.moveTo(centarX, centarY);
                while (kut < krugova) {
                    x = centarX + kut * Math.sin(kut + korijen + translacija) * razmak;
                    y = centarY + kut * Math.cos(kut + korijen + translacija) * razmak;

                    ctx.lineTo(x, y);
                    kut += 1 / (5 + kut);
                }
                //pozitivno plavo
                if (i == 2) {
                    ctx.strokeStyle = '#0000FF';
                }
                //negativno crveno
                if (i == 1) {
                    ctx.strokeStyle = '#FF0000';
                }
                ctx.stroke();
            }
        }
        
        document.getElementById("translacija").addEventListener("change", crtajSpiralu);
        crtajSpiralu(translacija);

    });
}

function crtajLeptira() {
    var promjena = document.getElementById("promjena");
    var platno = document.getElementById("mojePlatno");

    var centarX = platno.width / 2;
    var centarY = platno.height / 2;

    var ctx = platno.getContext("2d");
    ctx.translate(centarX, centarY);
    ctx.scale(centarX / 6, centarY / 6);
    ctx.lineWidth = 0.02;

    //
    //Crtanje leptira
    //

    function crtaj() {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        for (var x = 0; x <= 20.5; x += 0.05)
            ctx.lineTo((Math.pow(Math.E, Math.cos(x)) - 2 * Math.cos(4 * x) + Math.pow(Math.sin(x / 12), 5)) * Math.sin(x), (Math.pow(Math.E, Math.cos(x)) - 2 * Math.cos(4 * x) + Math.pow(Math.sin(x / 12), 5)) * Math.cos(x));
        ctx.strokeStyle = 'red';
        ctx.stroke();
        ctx.restore();
    }

    crtaj();

    //
    //Postepeno crtanje
    //

    function postepenoCrtanje(unos) {
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, platno.width, platno.height);
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(0, 0);
        for (var x = 0; x <= unos; x += 0.05)
            ctx.lineTo((Math.pow(Math.E, Math.cos(x)) - 2 * Math.cos(4 * x) + Math.pow(Math.sin(x / 12), 5)) * Math.sin(x), (Math.pow(Math.E, Math.cos(x)) - 2 * Math.cos(4 * x) + Math.pow(Math.sin(x / 12), 5)) * Math.cos(x));
        ctx.strokeStyle = 'red';
        ctx.stroke();
    }

    document.getElementById("crtaj").addEventListener("change", function () {
        var unos = document.getElementById("crtaj").value;
        postepenoCrtanje(unos);

    });

    document.getElementById("pokreni").addEventListener("click", pokreni);
    document.getElementById("zaustavi").addEventListener("click", zaustavi);

    //
    //Rotiranje
    //

    interval = 0;
    function pokreni() {
        interval = setInterval(rotacija, 50);
        document.getElementById("pokreni").disabled = true;
        document.getElementById("crtRotStart").disabled = true;
    }
    function zaustavi() {
        document.getElementById("pokreni").disabled = false;
        document.getElementById("crtRotStart").disabled = false;
        clearInterval(interval);
    }


    function rotacija() {

        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, platno.width, platno.height);
        ctx.restore();
        ctx.rotate(0.01);

        //
        //Crtanje leptira
        //
        crtaj();

    }


    //
    //Crtanje i rotacija
    //
    
    document.getElementById("crtRotOn").addEventListener("click", rotirajCrtaj);

    
function rotirajCrtaj(){
    //
    //Rotiranje
    //
    document.getElementById("crtRotStart").addEventListener("click", pokreni);
    document.getElementById("crtRotStop").addEventListener("click", zaustavi);
    
    interval = 0;
    brojac=0;
    function pokreni() {
        interval = setInterval(rotacija, 50);
        brojac= setInterval(povecaj, 50);
        document.getElementById("pokreni").disabled = true;
        document.getElementById("crtRotStart").disabled = true;
        
    }
    function zaustavi() {
        document.getElementById("pokreni").disabled = false;
        document.getElementById("crtRotStart").disabled = false;
        clearInterval(interval);
        clearInterval(brojac);
    }

    function povecaj(){    
    if(brojac>=20.5){
        brojac=0;
    }
    else{
            brojac+=0.05;
    }
    }
    
    function rotacija() {

        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, platno.width, platno.height);
        ctx.restore();
        ctx.rotate(0.01);

        //
        //Crtanje leptira
        //
        //ctx.save();
        //ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, platno.width, platno.height);
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(0, 0);
        for (var x = 0; x <= brojac; x += 0.05)
            ctx.lineTo((Math.pow(Math.E, Math.cos(x)) - 2 * Math.cos(4 * x) + Math.pow(Math.sin(x / 12), 5)) * Math.sin(x), (Math.pow(Math.E, Math.cos(x)) - 2 * Math.cos(4 * x) + Math.pow(Math.sin(x / 12), 5)) * Math.cos(x));
        ctx.strokeStyle = 'red';
        ctx.stroke();
        }

}
}