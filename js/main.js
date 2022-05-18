
//Pido la letra y el número de DNI

let letra = prompt("Dime una letra del DNI");

let numero = parseInt(prompt("Dime ahora el número del DNI"));

let modulo = numero % 23;

console.log(modulo);

let array = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
            
if(letra == array[modulo]){
    console.log("Bravo, si es correcto");
}else{
    console.log("No es un DNI correcto con letra");
}