# FRONTEND-ESSENTIALS-2 - 02-Javascript - Taak12
## Loops

### Uitleg

Uiteraard kun je binnen de loop allerlei handelingen doen. In deze taak gaan we een aantal `for-loops` maken die verschillende reeksen getallen in de console laten zien.

Zo zal de onderstaande code alleen getallen laten zien die deelbaar zijn door 3.
```js
for (i = 0; i < 100; i++) {
    if(i % 3 == 0){
        console.log(i);
    }
}
```
:zap: De operator die wordt gebruikt in de bovenstaande if-statement noem je modulo-operator. Zie [Bronnen](#bronnen).


### Leerdoelen

1. Ik kan een for-loop maken en binnen de for-loop handelingen uitvoeren

### Opdracht

1. Maak een for-loop die loopt tussen 0 en 99 en alleen de **even** getallen in de console toont

### Eindresultaat

![](img/eindresultaat-console-mod2.jpg)

### :heart: Bronnen

[W3S Javascript Operators](https://www.w3schools.com/js/js_operators.asp)  
[W3S Javascript Arrays](https://www.w3schools.com/js/js_arrays.asp)  
[W3S Javascript Array push() method](https://www.w3schools.com/jsref/jsref_push.asp)