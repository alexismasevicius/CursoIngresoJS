function mostrar()
{
    var precioBase;
    var porcentajeDescuento;
    var descuentoTotal;
    var precioFinal;

    precioBase=prompt("Ingrese el precio del producto.");
    precioBase=parseInt(precioBase);

    porcentajeDescuento=prompt("Ingrese el porcentaje de descuento.");
    porcentajeDescuento=parseInt(porcentajeDescuento);

    descuentoTotal=precioBase*porcentajeDescuento/100;

    precioFinal=precioBase-descuentoTotal;

    elPrecioFinal.value=precioFinal;

}
