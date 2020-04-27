// Definicion de variables globales//
var who = ['el perro', 'mi abuela', 'su tortuga', 'mi pájaro'];
var action = ['se comió', 'escondió', 'aplastó', 'rompió'];
var what = ['mis deberes', 'el móvil', 'las llaves', 'los cables'];
var when = ['antes de clase', 'justo ahora', 'mientras hacia el pino', 'en la hora de la comida', 'mientras hacia petit point'];

/*function excuse() {
   let qui = who[Math.floor(Math.random()*(who.length))];
   let act = action[Math.floor(Math.random()*(action.length))];
   let que = what[Math.floor(Math.random()*(what.length))];
   let cuando = when[Math.floor(Math.random()*(when.length))];
    
  var excusa=qui.concat(" ", act," ",que," ",cuando);
  return excusa;
}*/
  /*someFunction = () =>{
     console.log("run when called.");
 }
    window.onload = () =>{
     console.log("run before calling function.");
     someFunction();
 }*/
 
/*window.onload = () => {
     document.getElementById("frase").innerHTML = excuse();
     }*/
 //console.log(Excuse());

//console.log(quien);

var who = ['el perro', 'mi abuela', 'su tortuga', 'mi pájaro'];
var action = ['se comió', 'escondió', 'aplastó', 'rompió'];
var what = ['mis deberes', 'el móvil', 'las llaves', 'los cables'];
var when = ['antes de clase', 'justo ahora', 'mientras hacia el pino', 'en la hora de la comida', 'mientras hacia petit point'];

function excuseFor() {
    let arrayExcuse =[who, action, what, when];
    let excusePrueba ="";


    for ( var listForItems of arrayExcuse){
      //  excusePrueba = excusePrueba + valorAleatorio(arrayExcuse[item]);
        excusePrueba+= valorAleatorio(arrayExcuse[listForItems]) + " ";
        console.log()   
    }
     return excusePrueba;
}
console.log(excuseFor());
function valorAleatorio(arguments) {
    let posicion = Math.floor(Math.random()*(arguments.length));
    console.log(arguments.length);
    console.log(posicion);
    console.log(arguments);
    console.log(arguments[posicion]);
    return arguments[posicion];
}
window.onload = () => {
    document.getElementById("frase").innerHTML = excuseFor();
}
 //console.log(valorAleatorio());*/