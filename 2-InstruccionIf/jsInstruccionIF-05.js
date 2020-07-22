function mostrar()
{
	var edadIngresada

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17 || edadIngresada<13)
	{
		alert("esta persona no es adolescente");
	}
	
}