# FRONTEND-ESSENTIALS-2 - 01 - HTML/CSS - Taak 05

## Basic HTML 

### Uitleg

Je hebt nu geleerd hoe je HTML elementen op hetzelfde niveau snel kan aanmaken via Emmet door een `+` te gebruiken. Daarnaast weet je hoe je elementen in andere elementen kunt aangeven met een `>`. 

Maar hoe zou je dan bijvoorbeeld de onderstaande code snel neerzetten in een HTML bestand?

```html
    <table>
        <thead>
            <tr>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
```

Je gebruikt voor elke stap terug in de hierarchie die je wilt maken gebruikt je een `^`. Dit mogen er ook meerdere achter elkaar zijn.

![Emmet niveau omhoog](img/emmet-level-up.gif)

### Leerdoelen

1. Ik kan met Emmet een een niveau omhoog gaan in de nesting van HTML elementen

### Opdracht

1. Maak in 1 regel Emmet code een tabel met een 3 kolommen en 3 rijen. Zorg ervoor dat je ook een header rij maakt met als inhoud van de table header (`th`) `kolom1` t/m `kolom3` en zorg ervoor dat elke regulier table data (`td`) element in een table row (`tr`) als inhoud een cijfer bevat van 1 t/m 3.

### Eindresultaat

![Eindresultaat Emmet level up table](img/eindres-table.jpg)

### :heart: Bronnen

[Emmet.io](https://www.emmet.io/)  
[Emmet Cheatsheet](https://docs.emmet.io/cheat-sheet/)