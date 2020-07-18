
function mostrar()
{
var anchoFigura;
var largoFigura;
var perimetro;

anchoFigura=prompt("ingrese el ancho");
anchoFigura=parseInt(anchoFigura);

largoFigura=prompt("ingrese el largo");
largoFigura=parseInt(largoFigura);

perimetro=(largoFigura+anchoFigura)*2;

alert("El perímetro es de "+perimetro);

}
