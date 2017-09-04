"use strict"

var valstybe = [
    { pavadinimas: "Ispanija", plotas: 504782, gyvSkaicius: 46070146 },
    { pavadinimas: "Australija", plotas: 7686850, gyvSkaicius: 24641662 },
    { pavadinimas: "Indija", plotas: 3287590, gyvSkaicius: 1342512706 },
    { pavadinimas: "Lietuva", plotas: 65300, gyvSkaicius: 2821674 },
    { pavadinimas: "Peru", plotas: 1285216, gyvSkaicius: 32166473 }
];


console.log (valstybeZmogui(valstybe));

function valstybeZmogui(valstybe){
    for (let i = 0; i < valstybe.length; i++){
        console.log("Šalis: ", valstybe[i].pavadinimas, " joje gyvena: ", ((valstybe[i].gyvSkaicius)/1000000).toFixed(2), " mln. gyventojų");
        console.log("Valstybės plotas: ", valstybe[i].plotas," km², plotas tenkantis vienam gyventojui: ", getAreaPerCapital(valstybe[i].plotas, valstybe[i].gyvSkaicius), "m²");
        }
}

function getAreaPerCapital(plotas, gyvSkaicius){
    let plotasZmogui = (plotas * 1000000) / gyvSkaicius;
    return plotasZmogui.toFixed(2);
}
