function mostrar()
{
	var edadIngresada;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada<13)
	{
		alert("Esta persona es un niño.");
	}
	else
	{
		if(edadIngresada<18)
		{
			alert("Esta persona es un adolescente.");
		}
		else
		{
			alert("Esta persona es mayor.")
		}
	}
}