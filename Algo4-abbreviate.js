 /*
Créez une fonction `abbreviate` qui convertit un nom en initiales.

La sortie doit être en majuscules avec un point les séparant.

Example:
* "Alyson Hannigan" -> "A.H"
* "Cobie Smulders" -> "C.S"
* "Neil Patrick Harris" -> "N.P.H"

*/

// La fonction reçoit un prénom nom.
// Elle ne garde que l'initiale.
// Elle les assemble en les séparant d'un point.


const fullName = "Neil Patrick Harris" ;
console.log(fullName)
// let abbreviate1 = [fullName];
// console.log(abbreviate1)
let abbreviate2 = fullName.split(' ')
let abbreviate3 = abbreviate2.map(elem=>elem.substring(0,1))
let abbreviate4 = abbreviate3.join(".")
console.log(abbreviate4)


// const abbreviate = (str)
// console.log(abbreviate("Alyson Hannigan")); 