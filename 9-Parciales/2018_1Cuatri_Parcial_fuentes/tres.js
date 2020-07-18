function mostrar()
{
var precioProducto;
var porcentajeDescuento;
var descuentoTotal;
var precioFinal;

precioProducto=prompt("Ingrese el precio del producto.");
precioProducto=parseInt(precioProducto);

porcentajeDescuento=prompt("Ingrese el porcentaje de descuento a aplicar.");
porcentajeDescuento=parseInt(porcentajeDescuento);

descuentoTotal=(precioProducto*porcentajeDescuento)/100;

precioFinal=precioProducto-descuentoTotal;

elPrecioFinal.value=precioFinal;

}
