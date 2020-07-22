function mostrar()
{
	var edadPersona;
	var estadoCiv;

	edadPersona=txtIdEdad.value;
	edadPersona=parseInt(edadPersona);

	estadoCiv=estadoCivil.value;

	if(edadPersona<18 && estadoCiv=="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}	

}