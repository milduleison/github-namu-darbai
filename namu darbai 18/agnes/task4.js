"use strict"

// 1 užduotis
let tekstas;

//Įvedam tekstą
// tekstas = prompt("Įveskite tekstą: ");

function reverseString(str) {
    //tekstą sukarpo į masyvo elementus
    let splitString = str.split("");

    //masyvo elementus sukeičia vietomis
    var reverseArray = splitString.reverse();
    
    //masyvo elementus sudeda į stringą
    var joinArray = reverseArray.join("");
    return joinArray;
}

document.write("Jūsų įvestas tekstas: ", tekstas, "<br>");
document.write("Tekstas iš kitos pusės: ", reverseString(tekstas), "<br>");

// 2 užduotis

function getDateText(){
    let today = new Date();

    let weekday = ["Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis", "Sekmadienis"];

    let dayOfWeek = weekday[today.getDay() - 1];

    let months = ["sausio", "vasario", "kovo", "balandžio", "gegužės", "birželio", "liepos", "rugpjūčio", "rugsėjo", "spalio", "lapkričio", "gruodžio"];

    let dayOfMonth = months[today.getMonth()];
    return document.write( dayOfWeek + ", " + dayOfMonth + " " + today.getDate() + " diena");
}

getDateText();