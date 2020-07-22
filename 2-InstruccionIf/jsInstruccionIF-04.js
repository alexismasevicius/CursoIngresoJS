function mostrar()
{
	var edadIngresada;
	var edadReal;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	edadReal=edadIngresada>18
	edadReal=edadIngresada<12

	if(edadReal=false)
	{
	
	}
	else
	{
		alert("Esta persona es adolescente.")
	}


	/*
	if(edadIngresada>12)
	{
		if(edadIngresada<18)
		{
			alert("Esta persona es adolescente.")
		}
	}


	*/


	/*if(edadIngresada>12 && edadIngresada<18)
	{
		alert("Esta persona es adolescente.")
	}
}