function mostrar()
{
	var edadIngresada;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17)
	{
		alert("Es mayor");
	}
	else(edadIngresada<18)
	{
		alert("Es menor");
	}


}