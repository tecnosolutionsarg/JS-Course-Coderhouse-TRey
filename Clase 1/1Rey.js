/*
CONSIGNA: Crea un script en JS que le solicite al usuario ingresar uno o más datos. 
Luego, con JavaScript, realiza operaciones matemáticas o de concatenación sobre las 
entradas teniendo en cuenta el tipo de dato. Al finalizar mostrar el resultados 
con alert() o console.log()
*/
        
// Creador de excusas para la vida
        
let nombre = prompt('Nombre'); edad = parseInt(prompt('Edad')); razon = prompt('Razon'); razon2 = prompt('Razon 2'); cooldown = parseInt(prompt('Tiempo desconectado (en dias)'))
        
        
console.log(`Hoy ${nombre} de edad ${edad} no puede salir de la cama porque ${razon} y ${razon2}. Por favor, comunicarse con este luego de ${cooldown} dias. Gracias!`);