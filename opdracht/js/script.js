strAlfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
arrBerichtPosities = [];

//functie die door de strAlfabet string loopt en de positie teruggeeft van de meegegeven letter
function getLetterPositie(letter){
    for (i = 0; i < strAlfabet.length; i++) {
        if(letter == strAlfabet[i]){
            return i+1;
        }
    }
}

function zetBerichtOmNaarPosities(bericht){
    for (let i = 0; i < bericht.length; i++) {
        for (let j = 0; j < strAlfabet.length; j++) {
            if(bericht[i] == strAlfabet[j]){
                arrBerichtPosities.push(j);
            }
        }
    }
    console.log(arrBerichtPosities);
}

console.log(getLetterPositie("Z"));
zetBerichtOmNaarPosities("ABCD");