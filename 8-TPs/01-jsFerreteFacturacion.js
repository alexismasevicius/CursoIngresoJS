/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

txtIdPrecioUno
txtIdPrecioDos
txtIdPrecioTres
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultadoSuma;

    precioUno=txtIdPrecioUno.value;
    precioUno=parseInt(precioUno);

    preciosDos=txtIdPrecioDos.value;
    preciosDos=parseInt(preciosDos);

    precioTres=txtIdPrecioTres.value;
    precioTres=parseInt(precioTres);

    resultadoSuma=precioUno+preciosDos+precioTres;


    alert("El resultado es"+resultadoSuma);
	
}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultadoPromedio;

    precioUno=txtIdPrecioUno.value;
    precioUno=parseInt(precioUno);

    preciosDos=txtIdPrecioDos.value;
    preciosDos=parseInt(preciosDos);

    precioTres=txtIdPrecioTres.value;
    precioTres=parseInt(precioTres);

    resultadoPromedio=(precioUno+preciosDos+precioTres)/3;


    alert("El resultado es "+resultadoPromedio);
	
}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var precioSumado;
    var precioFinal;

    precioUno=txtIdPrecioUno.value;
    precioUno=parseInt(precioUno);

    preciosDos=txtIdPrecioDos.value;
    preciosDos=parseInt(preciosDos);

    precioTres=txtIdPrecioTres.value;
    precioTres=parseInt(precioTres);

    precioSumado=precioUno+preciosDos+precioTres;

    precioFinal=precioSumado*1.21


    alert("El resultado es"+precioFinal);
	
}