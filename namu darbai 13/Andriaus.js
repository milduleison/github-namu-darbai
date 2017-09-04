"use strict"

var valstybe = [
    { pavadinimas: "Ispanija", plotas: 504782, gyvSkaicius: 46070146 },
    { pavadinimas: "Australija", plotas: 7686850, gyvSkaicius: 24641662 },
    { pavadinimas: "Indija", plotas: 3287590, gyvSkaicius: 1342512706 },
    { pavadinimas: "Lietuva", plotas: 65300, gyvSkaicius: 2821674 },
    { pavadinimas: "Peru", plotas: 1285216, gyvSkaicius: 32166473 }
];


 function getAreaPerCapita(plotas, gyventojai) {
     return (plotas/gyventojai * 1000000).toFixed(2); // m2
 }


 for (let i = 0; i < valstybe.length; i++) {
    
    let pavadinimas = valstybe[i].pavadinimas;
     let gyventojai = (valstybe[i].gyvSkaicius / 1000000).toFixed(2);
     let plotas = valstybe[i].plotas;
     let plotasGyventojui = getAreaPerCapita(valstybe[i].plotas, valstybe[i].gyvSkaicius);

     console.log("Šalis: " + pavadinimas + ", joje gyvena " + gyventojai +  " mln. gyventojų.");
    
    console.log("Valstybės plotas: " + plotas + " km², plotas tenkantis vienam gyventojui: " + plotasGyventojui + " m².");

     console.log("==========================");
 }


/*valstybeZmogui(valstybe);

function valstybeZmogui(salys){
    for (let i = 0; i < salys.length; i++){
        console.log("Šalis: ", salys[i].pavadinimas, " joje gyvena: ", ((salys[i].gyvSkaicius)/1000000).toFixed(2), " mln. gyventojų");
        console.log("Valstybės plotas: ", salys[i].plotas," km², plotas tenkantis vienam gyventojui: ", getAreaPerCapital(salys[i].plotas, salys[i].gyvSkaicius), "m²");
        }
}

function getAreaPerCapital(plotas, gyvSkaicius){
    let plotasZmogui = (plotas * 1000000) / gyvSkaicius;
    return plotasZmogui.toFixed(2);
}*/