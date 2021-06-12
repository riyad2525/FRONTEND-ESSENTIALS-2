function geefRandomGetalTerug(){                
    let randomGetal = Math.random();
    randomGetal = randomGetal*10;
    randomGetal = Math.ceil(randomGetal);
    return randomGetal;

}

console.log(geefRandomGetalTerug());    