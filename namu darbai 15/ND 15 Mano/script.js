//Suraskime H1 elementa, pagal klase ir priskiriam jam kintamaji
let titleElement = document.getElementsByClassName("main-title")[0]


//document.getElementsByClassName("main-title")[0].innerHTML = "Muzikos albumai"; //pakeitem pavadinima su innerHTML
 titleElement.innerHTML = "Muzikos albumai"; 


//Pridekime papildoma klas H1
titleElement.classList.add("header-title");
//Pakeciame stiliu i italic
titleElement.style.fontStyle = "italic";

//kai paspaudziamas mygtukas, vykdyk sia funkcija

//<button type="button" class="btn btn-primary" onclick="addAlbum()">Pridėti</button> PRIDEDAM PRIE ONCLICK "addAlbum"
function addAlbum(){
    console.log("Pridedam albuma");
}
//surandame formos mygtuka "ClicON"
let addAlbumButton = document.querySelector(".btn-save-album");
let clearAlbumButton = document.querySelector(".btn-clear-form");

addAlbumButton.addEventListener("click", addAlbum);

let albumlist = [];

let artistElement = document.querySelector("#artist");
let albumElement = document.querySelector("#album");
let releaseDateElement = document.querySelector("#releaseDate");
let imageElement = document.querySelector("#image");

//nuskaitome laukeliu reiksmes ir sukelieme failus
function addAlbum() {
    let artist = artistElement.value;
    let album = albumElement.value;
    let release = releaseDateElement.value;
    let image = imageElement.files[0].name;

    if(!artist || !album || !release || !image) {
        console.log("Miauuuuu - ivesta neteisingai" +" "+ clearForm(albumlist));//jei neivedei atlikejo
        return;
    }

    albumlist.push({
        "artist": artist,
        "album":  album,
        "release": release,
        "image": image.name
    });

    console.log("Atlikejas :", artist,", Albumas :", album,", Metai :", release,", Nuotrauka :", image);
}

addAlbumButton.addEventListener("click", isAlbumYear);

function isAlbumYear() {
    let data = document.querySelector("#releaseDate").value;
    for (let i = 0; i < data.length; i++) {
       let a = data[i];
    if(NaN!==(a) && data > 1900 && data < 2018){
    console.log("Metus įvediai teisingai");
    return true
        }
    else{
       clearForm(albumlist);
        console.log("Albumo metai įvesti neteisingai");
        return false
        //vis tiek neteisingus metus kelia i albumlist
    }
    }
}

clearAlbumButton.addEventListener("click", clearForm);
function clearForm(){

    albumlist.splice(0);
    console.log("Rasyk is naujo!!!");
}

