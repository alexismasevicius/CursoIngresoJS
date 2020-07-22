function mostrar()
{
	var edadPersona;
	var estadoCiv;

	edadPersona=txtIdEdad.value;
	edadPersona=parseInt(edadPersona);

	estadoCiv=estadoCivil.value;

	if(edadPersona>17 && estadoCiv=="Soltero")
	{
		alert("Es soltero y no es menor");
	}	


}