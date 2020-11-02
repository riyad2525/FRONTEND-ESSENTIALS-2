# FRONTEND-ESSENTIALS-2 - 02-Javascript - Taak01

## Herhaling

### Uitleg

Vorige taak zou je kunnen hebben opgelost met een variatie van onderstaande code.

```js
let strNaam;
let boolNaamKlopt;

strNaam = prompt("Hoe heet je?");
// console.log(strNaam);

boolNaamKlopt = confirm("Heet je " + strNaam +"?");
// console.log(boolNaamKlopt);

if(boolNaamKlopt){
    alert("Welkom " + strNaam + "!");
    // console.log("Naam klopt: " + strNaam);
}
else{
    strNaam = prompt("Nog een keer: hoe heet je?");  
    // console.log("Naam klopt NIET: " + strNaam);
    boolNaamKlopt = confirm("Heet je " + strNaam +"?");

    if(boolNaamKlopt){
        alert("Welkom " + strNaam + "!");
        // console.log("Naam klopt: " + strNaam);
    }
    else{
        alert("Ok, evengoed Welkom!")
        // console.log("Naam klopt WEER NIET: " + strNaam);
    }
}
```



### Opdracht



### Eindresultaat



### Bronnen

