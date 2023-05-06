// Votre fonction reçoit un tableau d'entiers en entrée. Votre tâche consiste à déterminer si les nombres sont dans l'ordre croissant. Un tableau est dans l'ordre croissant s'il n'y a pas deux entiers adjacents où l'entier de gauche dépasse l'entier de droite en valeur.

// Exemples: 
// inAscOrder([1,2,4,7,19]); // returns true
// inAscOrder([1,2,3,4,5]); // returns true
// inAscOrder([1,6,10,18,2,4,20]); // returns false
// inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

// Trouver une foncion qui va analyser les nombres d'un tableau un par un 
// pour regarder si le nombre analysé est supérieur au précédent
//  si le nombre est supérieur il passe au suivant 
//  sinon il s'arrête est affiche false
 
//  s'il arrive au bout du tableau il affiche true



const arr=[1,2,3,5,6,7,9]
function inAscOrder(arr) {
    for (let i = 0; i < arr.length; i++){
        console.log(i)
        if (arr[i] > arr[i+1]) {
            console.log("False")
        } else{
            console.log("True")
        } 
    }

}
console.log(inAscOrder(arr)); 