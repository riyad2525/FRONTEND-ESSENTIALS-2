strAlfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
arrInputPosities = [];
arrCodewordPosities = [];
arrOutputPosities = [];

//functie die door de strAlfabet string loopt en de positie teruggeeft van de meegegeven letter
function getLetterPositie(letter){
    for (i = 0; i < strAlfabet.length; i++) {
        if(letter == strAlfabet[i]){
            return i+1;
        }
    }
}

function zetBerichtOmNaarPosities(bericht){
    var tmpArray = [];
    for (let i = 0; i < bericht.length; i++) {
        for (let j = 0; j < strAlfabet.length; j++) {
            if(bericht[i] == strAlfabet[j]){
                // arrBerichtPosities.push(j);
                tmpArray.push(j);
            }
        }
    }
    // console.log(arrBerichtPosities);
    return tmpArray;

}

// console.log(getLetterPositie("Z"));
// zetBerichtOmNaarPosities("ABCD");


// alles hieronder weg



strInput = prompt("Voer bericht in ");
strCodeword = prompt("Voer code in");

document.querySelector(".input").innerHTML = strInput;
document.querySelector(".codeword").innerHTML = strCodeword;

function encr(){
    arrInputPosities =  zetBerichtOmNaarPosities(strInput.toUpperCase());
    arrCodewordPosities =  zetBerichtOmNaarPosities(strCodeword.toUpperCase());
    console.log(arrInputPosities);
    console.log(arrCodewordPosities);
    
    for (let i = 0; i < arrInputPosities.length; i++) {
        arrOutputPosities[i] = arrInputPosities[i] + arrCodewordPosities[i];
    }
    
    console.log(arrOutputPosities);
    document.querySelector(".output").innerHTML = arrOutputPosities.toString();
}

