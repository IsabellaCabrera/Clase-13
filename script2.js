const numeros = [3, 1, 1, 10, 5, 7, 2];

let suma = 0;
let Numeromayor = numeros [0];
let Numeromenor = numeros [0];

for (Posicion of numeros){
suma = suma + Posicion;
if (laPosicion > Numeromayor){
    Numeromayor = Posicion;
}

if (laPosicion < Numeromenor) {
    Numeromenor = Posicion;
}
}

console.log(suma, Numeromenor,Numeromayor);

const parrafo = document.querySelector ("#parrafo");
console.log(parrafo);
parrafo.innerHTML = "La suma total es " +  suma + " El Numero menor es " + Numeromenor+ " Y el Numero mayor es " + Numeromayor;
parrafo.classList.add("parrafo--color", "parrafo--grande");
