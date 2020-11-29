topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca",
    "Citizen Kane",
    "Gone with the Wind",
    "The Wizard of Oz",
    "One Flew Over the Cuckoo's Nest",
    "Lawrence of Arabia"
];

eigenTopFilms = [];

for(i = 0; i < topFilms.length; i++){
    document.querySelector(".imdb-film" + (i+1)).innerHTML = topFilms[i];
}

function kiesFilm(){
    numKeuze = eigenTopFilms.length + 1;
    keuze = prompt("Welke film staat op plek " + numKeuze);
    eigenTopFilms.push(topFilms[keuze-1]);
    document.querySelector(".kiesfilm-button").innerHTML = "Kies Film voor plek " + (numKeuze + 1);
    document.querySelector(".eigen-film" + numKeuze).innerHTML = eigenTopFilms[numKeuze -1];
    console.log(eigenTopFilms[numKeuze -1]);
    document.querySelector(".imdb-film" + (numKeuze+1)).style.textDecoration = "line-through";
}