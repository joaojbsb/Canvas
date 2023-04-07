    /*
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle='green';
    pincel.fillRect(0, 0, 600, 400);

    pincel.fillStyle='yellow';
    pincel.beginPath();
    pincel.moveTo(300, 50);
    pincel.lineTo(50, 200);
    pincel.lineTo(550, 200);
    pincel.fill();

    pincel.beginPath();
    pincel.moveTo(300, 350);
    pincel.lineTo(50, 200);
    pincel.lineTo(550, 200);
    pincel.fill();

    pincel.fillStyle='darkblue';
    pincel.beginPath();

    pincel.arc(300, 200, 100, 0, 2*3.14);
    pincel.fill();






    function desenhaRetangulo(x, y, largura, altura, cor) {
        var tela = document.querySelector('canvas');
        var pincel = tela.getContext('2d');

        pincel.fillStyle=cor;
        pincel.fillRect(x,y, largura, altura);
        pincel.strokeStyle='black';
        pincel.strokeRect(x,y, largura, altura);
    }

    function desenhaTexto(x , y, texto) {
        var tela = document.querySelector('canvas');
        var pincel = tela.getContext('2d');

        pincel.font='15px Georgia';
        pincel.fillStyle='black';
        pincel.fillText(texto, x, y);    
    }

    function desenhaBarra(x, y, serie, cores, texto) {

        desenhaTexto(x, y - 10, texto);

        var somaAltura = 0;
        for (var i = 0; i < serie.length; i++) {
            var altura = serie[i];
            desenhaRetangulo(x, y + somaAltura, 50, altura, cores[i]);
            somaAltura = somaAltura + altura;
        }
    }

    var cores = ['blue','green','yellow', 'red'];
    var serie2015 = [50,25,20,5];
    var serie2016 = [65,20,13,2];

    desenhaBarra(50, 50, serie2015, cores, '2015');
    desenhaBarra(150, 50, serie2016, cores, '2016');

    */
/*pegar coordenadas da tela*/


     function desenhaQuadrado(x, y, tamanho, cor) {

        pincel.fillStyle = cor;
        pincel.fillRect(x, y, tamanho, tamanho)
        pincel.fill();
    }

    function desenhaCirculo(x, y, raio, cor) {

        pincel.fillStyle = cor; // o padrão é blue
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * 3.14);
        pincel.fill();

    }

    function desenhaPaletaDeCores() {

        desenhaQuadrado(xVermelho, yQuadrados, tamanhoQuadrados, 'red');
        desenhaQuadrado(xVerde, yQuadrados, tamanhoQuadrados, 'green');
        desenhaQuadrado(xAzul, yQuadrados, tamanhoQuadrados, 'blue');

    }

    function lidaComMovimentoDoMouse(evento) {

        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;

        // usando a nova função 
        if(desenha && podeDesenharNaArea(x,y)) {

            desenhaCirculo(x, y, 5, corAtual);
        }
    }

    function habilitaDesenhar() {

        desenha = true;
    }

    function desabilitaDesenhar() {

        desenha = false;
    }

    function podeDesenharNaArea(x, y) {

         if(x >= 0 && x < 3*tamanhoQuadrados && y >= 0 && y < tamanhoQuadrados) {
            return false;
        } else {
            return true;
        }
    }

function selecionaCor(evento) {

        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;

        // cada condição muda a variável `corAtual`

        // começamos pela condição do y que é igual em todos os casos
        if (y > yQuadrados && y < yQuadrados + tamanhoQuadrados) {

            if (x > xVermelho && x < xVermelho + tamanhoQuadrados) {

                corAtual = 'red';

            } else if (x > xVerde && x < xVerde + tamanhoQuadrados) {

                corAtual = 'green';

            } else if (x > xAzul && x < xAzul + tamanhoQuadrados) {

                corAtual = 'blue';
            }
        }
    }

    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 400);

    var desenha = false;
    var corAtual = 'blue';
    var xVermelho = 0;
    var xVerde  = 50;
    var xAzul = 100;
    var yQuadrados = 0;
    var tamanhoQuadrados = 50;

    desenhaPaletaDeCores();

    tela.onmousemove = lidaComMovimentoDoMouse;

    tela.onmousedown = habilitaDesenhar;

    tela.onmouseup = desabilitaDesenhar;

    tela.onclick = selecionaCor;