
function mostrar()
{
    var anchoRectangulo;
    var largoRectangulo;
    var perimetroRectangulo;

    anchoRectangulo=prompt("ingrese el ancho del rectángulo");
    anchoRectangulo=parseInt(anchoRectangulo);

    largoRectangulo=prompt("ingrese el largo del rectángulo");
    largoRectangulo=parseInt(largoRectangulo);

    perimetroRectangulo=(anchoRectangulo+largoRectangulo)*2;

    alert("El perímetro del rectángulo es "+perimetroRectangulo);

}
