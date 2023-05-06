//Écrivez une fonction qui prend en entrée un tableau d'entiers et renvoie un tableau contenant les éléments de l'entrée sous forme de chaînes de caractères.

// Exemple :

// toString([1,2,3]) renverra ["1","2","3"]


console.log("start")
// --------------------------------------------------------


function toString(array) {
    return array.map(e=>e.toString())
}
console.log(toString([1,2,3])); 


// --------------------------------------------------------
console.log("end")