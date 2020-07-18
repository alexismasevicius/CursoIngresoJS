function mostrar()
{
    var nombrePrimero;
    var nombreSegundo;
    var pesoPrimero;
    var pesoSegundo;
    var pesoSumado;
    var pesoPromedio;

    nombrePrimero=prompt("Ingrese el nombre de la primera persona.");

    nombreSegundo=prompt("Ingrese el nombre de la segunda persona.");

    pesoPrimero=prompt("Ingrese el peso de la primera persona.");
    pesoPrimero=parseInt(pesoPrimero);

    pesoSegundo=prompt("Ingrese el peso de la segunda persona.");
    pesoSegundo=parseInt(pesoSegundo);

    pesoSumado=pesoPrimero+pesoSegundo;

    pesoPromedio=(pesoPrimero+pesoSegundo)/2;

    alert("Ustedes se llaman "+nombrePrimero+" y "+nombreSegundo+". Pesan "+pesoPrimero+" y "+pesoSegundo+" kilos, que sumados son "+pesoSumado+" kilos y su promedio son "+pesoPromedio+" kilos");
    

}
