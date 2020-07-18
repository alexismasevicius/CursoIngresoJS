/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperaturaFar;
    var temperaturaCel;
    
    temperaturaFar=txtIdTemperatura.value;
    temperaturaFar=parseInt(temperaturaFar);

    temperaturaCel=(((temperaturaFar-32)*5)/9);
    
    alert(temperaturaFar+" grados Farenheit son "+temperaturaCel+" grados centígrados.");
    //( °F − 32) × 5/9

}

function CentigradosFahrenheit () 
{
    var temperaturaFar;
    var temperaturaCel;
    
    temperaturaCel=txtIdTemperatura.value;
    temperaturaCel=parseInt(temperaturaCel);

    temperaturaFar=(temperaturaCel*1.8)+32;

    
    alert(temperaturaCel+" grados Celsius son "+temperaturaFar+" grados Farenheit.");

    //ºF = (ºC · 1,8) + 32

}
