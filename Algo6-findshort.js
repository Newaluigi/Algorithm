 // Crée une fonction qui renvoie la longueur du ou des mots les plus courts.

// La chaîne ne sera jamais vide et vous n'avez pas besoin de tenir compte des différents types de données.

// exemple : 
// findShort("Prachett is the best author in the world ") // 2

// PSEUDO CODE :
// La fonction va parcourir la phrase enregistrer va analyser si elle trouve un mot de 2 lettres si oui elle affiche 2 sinon elle analyse si elle analyse pour 3 et ainsi de suite...


function findShort(sentence){
    let result = sentence.split(" ")
        console.log(result)
    let newMethod = result[0].length

    for (let i = 0; i < result.length; i++){
        // if (result[i].length===1) {
        //     console.log("1")
        // }
        // else if (result[i].length===2) { 
        //   console.log("2")
        // }
        // else if (result[i].length===3) { 
        //     console.log("3")
        // }
        // else if (result[i].length===4) { 
        //     console.log("4")
        // }
        // else  {
        //     console.log("For the moment i don't create JS function for german or finnish people :(")
        // }
        if (result[i].length < newMethod){
            newMethod = result[i].length
        }

    }
    return newMethod
}
console.log(findShort("Prachett is the best author in the world")); 

