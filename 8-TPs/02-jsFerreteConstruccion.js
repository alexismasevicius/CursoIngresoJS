/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoTerreno;
    var anchoTerreno;
    var perimetroTerreno;
    var alambreTotal;

    largoTerreno=txtIdLargo.value;
    largoTerreno=parseInt(largoTerreno);

    anchoTerreno=txtIdAncho.value;
    anchoTerreno=parseInt(anchoTerreno);

    perimetroTerreno=(largoTerreno+anchoTerreno)*2;

    alambreTotal=perimetroTerreno*3;

    alert("La cantidad de alambre a comprar será de "+alambreTotal+" metros");

}
function Circulo () 
{
    var radioTerreno;
    var diametroTerreno
    var circunferenciaTerreno;
    var alambreTotal;

    radioTerreno=txtIdRadio.value;
    radioTerreno=parseInt(radioTerreno);

    diametroTerreno=2*radioTerreno;

    circunferenciaTerreno=3.14*diametroTerreno;
    
    alambreTotal=circunferenciaTerreno*3

    alert("La cantidad de alambre a comprar será de "+alambreTotal+" metros");

}
function Materiales () 
{
    var largoTerreno;
    var anchoTerreno;
    var superficieTerreno;
    var bolsasCemento;
    var bolsasCal;

    largoTerreno=txtIdLargo.value;
    largoTerreno=parseInt(largoTerreno);

    anchoTerreno=txtIdAncho.value;
    anchoTerreno=parseInt(anchoTerreno);

    superficieTerreno=largoTerreno*anchoTerreno;

    bolsasCemento=2*superficieTerreno;

    bolsasCal=3*superficieTerreno;

    alert("Se necesitarán "+bolsasCemento+" bolsas de cemento y "+bolsasCal+" bolsas de cal.");

}