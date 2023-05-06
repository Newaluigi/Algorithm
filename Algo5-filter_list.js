// Dans cet Algo vous allez créer une fonction qui prend une liste d'entiers et de chaînes non négatifs et renvoie une nouvelle liste avec les chaînes filtrés
// Exemple :
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// La fonction va passer sur chaque élément du tableau
// si elle tombe sur un nombre elle le garde
// si non elle continue jusqu'à arriver à la fin de la séquence.

function filter_list(elem) {
  let result = [];
  for (let i = 0; i < elem.length; i++) {
    console.log(i);
    if (isNaN(elem[i])) {
      console.log("False");
    } else {
      console.log("True");
      result.push(elem[i]);
    }
  }
  return result;
}
console.log(filter_list([1, 2, "a", "b"]));
