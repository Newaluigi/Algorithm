 // Créez une fonction appelée raccourci pour supprimer les voyelles minuscules (a, e, i, o, u ) dans une chaîne donnée.

// exemple :
// // "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

// PSEUDO CODE :
// la fonction remplace les voyelles de la phrase et joint les éléments


console.log("start")
// --------------------------------------------------------

function shortcut (string) {
  let result = string.filter(i =! "a", "e", "i", "o", "u", )
    // for (i=0 ; i < string.length ; i++)
    //     if (i === "a" || i === "e" || i === "e"|| i === "o" || i === "u")
  // return string.split("e").join('')
  return
}
console.log(shortcut("hello")); 

// --------------------------------------------------------
console.log("end")