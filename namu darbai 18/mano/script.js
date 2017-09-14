function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
console.log(reverseString("labas"));


function getDateText(){
let today = new Date();
let year = today.getYear();
if(year < 1000){
    year+=1900;
}
let day = today.getDay();
let month= today.getMonth();
let daymonth = today.getDate();
let dayarray = new Array("Sekmadienis","Pirmadienis","Antradienis","Treciadienis","Ketvirtadienis","Penktadienis","Šeštadienis");
let montharray = new Array("Sausio","Vasario","Kovo","Balandzio","Geguzes","Birzelio","Liepos","Rugpjucio","Rugsejo","Spalio","Lapkricio","Gruodzio");
return console.log("" +dayarray[day]+", "+montharray[month]+" "+daymonth+", "+year+"</br>");
}
console.log(getDateText());
