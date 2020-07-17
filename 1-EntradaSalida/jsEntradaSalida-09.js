/*
Se pide un importe y un porcentaje descuento por prompt, y se muestra el importe con el descuento por alert con el mensaje 
" el importe es $ xxxx el total de descuento es $xxx y el precio final es $xxx, gracias por su compra"




*/
function mostrarAumento()
{

var importeUno;
var descuentoUno;
var importeDescuento;
var descuentoTotal;

importeUno=prompt("ingrese importe");
importeUno=parseInt(importeUno);

descuentoUno=prompt("ingrese porcentaje de descuento");
descuentoUno=parseInt(descuentoUno);

importeDescuento=(importeUno*descuentoUno)/100;

descuentoTotal=importeUno-importeDescuento;

alert("el importe es " + importeUno + " el total de descuento es " + importeDescuento + " y el precio final es " + descuentoTotal +", gracias por su compra");



/*	var sueldo;
	var resultado;
	var aumentoSueldo;
	var porcentaje;

	porcentaje= prompt("ingrese porcentaje");
	porcentaje=parseInt(porcentaje);


	sueldo=txtIdSueldo.value;
	sueldo=parseInt(sueldo);

 	aumentoSueldo=sueldo*porcentaje/100;

	resultado=sueldo + aumentoSueldo;
	txtIdResultado.value=resultado;

	;*/
}
