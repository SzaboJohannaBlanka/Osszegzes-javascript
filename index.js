// Tomb szamainak osszege

const x = [-14, 23, 48, -73, 0, 17, 16];

let osszeg = 0;

const osszegzes = (x, osszeg) => {
    for (let i=0; i < x.length; i++) osszeg+=x[i];
    
        console.log("A szamok osszege: "+osszeg);
}

osszegzes(x, osszeg);