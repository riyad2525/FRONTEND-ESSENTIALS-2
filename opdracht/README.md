# FRONTEND-ESSENTIALS-2 - Eindopdracht

##  Caesar Cypher

De Caesar Cypher (of Caesarcijfer in het nederlands) is een manier om tekst te versleutelen. Zie [Wikipedia](https://simple.wikipedia.org/wiki/Caesar_cipher). 

In deze eindopdracht gaan we deze versleutelmanier gebruiken om te tekst te versleutelen en ook om deze weer te ontsleutelen.

### Uitleg

Een gemakkelijke manier om een woord te versleutelen is door alle letters één of meer plaatsen op te schuiven in het alfabet. Als we bijvoorbeeld elke letter in het woord `BOOM` 1 plaats verschuiven dan krijg je `CPPN` als versleuteld bericht.

Bericht | B | O | O | M
-- | --|--|--|--
Versleuteld bericht | C | P | P | N

#### Iets ingewikkelder

Dit is wel een heel gemakkelijk voorbeeld. We kunnen het wat moeilijker maken door een elke letter een verschillende aantal plaatsen op te schuiven. Stel we verschuiven de 1ste letter 1 plek op, de 2e letter 2 plekken, de 3e letter 3 plekken, etc.

Bericht | B | O | O | M
-- | --|--|--|--
Aantal plekken opschuiven | 1 | 2 | 3 | 4
Versleuteld bericht | C | Q | R | P

De verzender en de ontvanger hoeven nu alleen de getallen 1234 te weten om het bericht te kunnen versleutelen en te ontsleutelen. Je zou dit ook anders kunnen doorgeven, in de vorm van een woord. In dit geval zou het woord ABCD zijn. A=1, B=2, etc. Om het wat realistischer te maken kunnen we ook een *echt* woord gebruiken natuurlijk. Stel we nemen een ander vierletterig woord als **codewoord**: KLAS.

Het omzetten van de letter B gaat dan als volgt:
1. Bepaal de positie van de letter B in het alfabet -> 2.
2. Bepaal de positie van de overeenkomende letter in het codewoord en de positie daarvan in het alfabet: K -> 11
3. Tel beide getallen op (2 + 11 = 13). De versleutelde letter is dan de letter die op positie 13 staat in het alfabet -> M.

#### Codewoord gebruiken

Bericht | B | O | O | M
-- | --|--|--|--
Plek in het alfabet | 2 | 15 | 15 | 19
Codewoord | K | L | A | S
Plek in het alfabet | 11 | 12 | 1 | 19
Nieuwe letter plek in het alfabet | 13 | 27 | 16 | 38
Versleuteld bericht | M | ? | P | ?

Maar wat te doen als de positie van de versleutelde letter groter is dan het aantal letters in het alfabet? Simpel, we beginnen dan gewoon weer aan het begin van het alfabet. Dus om de letter O te versleutelen met de letter L (de 2e letters van het bericht en het codewoord) kom je op de letter met positie 27. Er zijn 26 letters in het alfabet dus positie 27 beland uiteindelijk weer op positie 1 (27 - 26 = 1) en dat is de letter A. Hetzelfde doen we met het versleutelen van de letter M met de letter S: 38 - 26 = 12 = letter L.

Bericht | B | O | O | M
-- | --|--|--|--
Plek in het alfabet | 2 | 15 | 15 | 19
Codewoord | K | L | A | S
Plek in het alfabet | 11 | 12 | 1 | 19
Nieuwe letter plek in het alfabet | 13 | 27 | 16 | 38
Versleuteld bericht | M | A | P | L

Misschien valt je al op dat dit voorbeeld niet meer werkt als je een bericht hebt dat groter is dan het codewoord. De oplossing hiervoor is simpelweg het herhalen van het codewoord:

Bericht | S | T | U | D | E | N | T
-- | --|--|--|-- | -- | -- | -- 
Codewoord | K | L | A | S | K | L | A
Bericht positie | 19 | 20 | 21 | 4 | 5 |14 | 20
Berekening | + | + | + | + | + | + | +
Codewoord positie | 11 | 12 | 1 | 19 | 11 | 12 | 1
-- | = | = | = | = | = | = | =
Positie versleutelde letter | 30 | 32 | 22 | 23 | 16 | 26 | 21
Versleuteld bericht | D | F | V | W | P | Z | U 

#### Ontsleutelen

Je kunt nu het versleutelde bericht DFVWPZU delen met iemand en die zal in combinatie met het codewoord KLAS het bericht moeten kunnen ontsleutelen. In de tabelvorm zoals hierboven ziet dat er zo uit:

Versleuteld bericht | D | F | V | W | P | Z | U 
-- | --|--|--|-- | -- | -- | -- 
Codewoord | K | L | A | S | K | L | A
Positie versleutelde letter | 4 | 6 | 22 | 23 | 16 | 26 | 21
Berekening | - | - | - | - | - | - | -
Codewoord positie | 11 | 12 | 1 | 19 | 11 | 12 | 1
-- | = | = | = | = | = | = | =
Bericht positie | -7 | -6 | 21 | 4 | 5 |14 | 20
Negatief getal? + 26! | 19 | 20 | 21 | 4 | 5 | 14 | 20
Bericht | S | T | U | D | E | N | T

De eerste 2 kolommen hebben als positie een negatief getal! Om dit toch goed om te zetten naar de ontsleutelde letter moet je er 26 bij optellen.
> Om de letter D te ontsleutelen met de letter K zoals gebeurt in de meest linker kolom:  
> positie letter D - positie letter K + 26 = positie van de ontsleutelde letter  
> DUS: 4 - 11 = -7 en -7 + 26 = 19 en de letter met positie 19 is S.

### Leerdoelen

1. Ik kan functies met argumenten en return waarden toepassen
2. Ik kan arrays vullen 
3. Ik kan een forloop gebruiken om door een array te lopen en berekeningen uitvoeren op de waarden van een array
### Opdracht

1. Maak een webapp die een bericht *ver*sleuteld en *ont*sleuteld.
   1. Vraag de gebruiker via prompts om een bericht en codewoord op te geven.
   2. Toon het het opgegeven bericht en het code woord aan de gebruiker in HTML elementen gemaakt in `index.html`
   3. Maak twee knoppen in `index.html` genaamd `versleutel` en `ontsleutel` die allebei een functie aanroepen via het `onclick` attribuut.
   4. Voer de nodige berekeningen uit om het bericht te *versleutelen* en toon het versleutelde bericht aan de gebruiker als deze op de knop versleutel drukt.
   5. Voer de nodige berekeningen uit om het bericht te *ontsleutelen* en toon het ontsleutelde bericht aan de gebruiker als deze op de knop ontsleutel drukt.

> :rocket: Om deze opdracht goed uit te kunnen voeren is het verstandig deze op te delen in kleinere stukjes. Je hebt geleerd om met behulp van functies je code op te delen. Maak daar slim gebruik van.  
> 
> Het is niet te doen om in één keer de juiste code te produceren. Doe dit dus stapje voor stapje en gebruik `console.log` om de resultaten te bekijken en te controleren. Een eerste stap zou kunnen zijn om een functie te maken die van een opgegeven string "ABC" de posities in het alfabet in de console toont. Het antwoord is duidelijk en gemakkelijk te controleren. Een volgende stap zou dan kunnen zijn om de gevonden posities in een array te zetten, bij elke waarde in de array 1 op te tellen en dit weer te tonen in de console. Als je dan als laatste stap de waarden in die array weer om kan zetten naar letter met een functie dan heb je de basis van de opdracht al klaar. 
### Eindresultaat

**De flow van het programma ziet er ongeveer zo uit:**  
1. Vraag aan de gebruiker mbv promts om input (bericht en codewoord) en sla deze op in twee variabelen
2. Toon de input in HTML elementen aan de gebruiker
3. Gebruiker drukt op de knop versleutel ->
   1. Loop door het opgegeven bericht en bepaal voor elke letter de positie in het alfabet. Sla dit getal op in een array.
   2. Loop door het opgegeven codewoord en bepaal voor elke letter de positie in het alfabet. Sla dit op in een array.
   3. Tel de gevonden posities bij elkaar op en sla de uitkomst op in een array. Check of een uitkomst groter is dan 26 en voer dan de juiste berekening uit om een geldige waarde op te slaan in de array. (dus geen getallen boven de 26)
   4. Loop door de array met gevonden posities en loop per positie door het alfabet tot je de letter vind die overeenkomt met de positie. Sla de gevonden letters op in een array of string.
   5. Toon de uitkomst aan de gebruiker in een HTML element.
4. Gebruiker drukt op de knop ontsleutel ->
   1. Zelfde als hierboven maar dan iets gewijzigd in de berekeningen. 




### :heart: Bronnen

[Wikipedia - Caesarcijfer ](https://nl.wikipedia.org/wiki/Caesarcijfer)