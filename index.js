// Definicion de variables globales//
var who = ['el perro', 'mi abuela', 'su tortuga', 'mi pájaro'];
var action = ['se comió', 'escondió', 'aplastó', 'rompió'];
var what = ['mis deberes', 'el móvil', 'las llaves', 'los cables'];
var when = ['antes de clase', 'justo ahora', 'mientras hacia el pino', 'en la hora de la comida', 'mientras hacia petit point'];

function excuseFor() {
    let arrayExcuse =[who, action, what, when];
    let excusePrueba ="";

    for ( var listForItems of arrayExcuse){
        excusePrueba+= valorAleatorio(listForItems) + " ";
    }
     return excusePrueba;
}
console.log(excuseFor());
function valorAleatorio(arguments) {
    let posicion = Math.floor(Math.random()*(arguments.length));
    return arguments[posicion];
}
window.onload = () => {
    document.getElementById("frase").innerHTML = excuseFor();
}

/*segunda solución*/
/*function excuse() {
   let qui = who[Math.floor(Math.random()*(who.length))];
   let act = action[Math.floor(Math.random()*(action.length))];
   let que = what[Math.floor(Math.random()*(what.length))];
   let cuando = when[Math.floor(Math.random()*(when.length))];
    
  var excusa=qui.concat(" ", act," ",que," ",cuando);
  return excusa;
}
window.onload = () => {
    document.getElementById("frase").innerHTML = excuse();
}*/