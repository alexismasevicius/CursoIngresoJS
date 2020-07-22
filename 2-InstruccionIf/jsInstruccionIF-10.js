function mostrar()
{
	var notaAlumno;


	notaAlumno=Math.floor(Math.random() * 10) + 1;

	if(notaAlumno<4)
	{
		alert(notaAlumno+": Vamos, la proxima se puede.");
	}
	else
	{
		if(notaAlumno>8)
		{
			alert(notaAlumno+": Excelente.");
		}
		else
		{
			alert(notaAlumno+": Aprobó.");
		}
	}
}