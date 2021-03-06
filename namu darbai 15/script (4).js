// Suraskite H1 DOM elementą pagal klasę ir priskirkime jį kintamąjam
let titleElement = document.getElementsByClassName("main-title")[0];


// Pakeiskime H1 title pavadinima
titleElement.innerHTML = "Muzikos albumai";


// Pridėkime padildomą klasę H1
titleElement.classList.add("header-title");


// Pakeiskime stiliųs
titleElement.style.fontStyle = "italic";



// Surandame formos mygtuką "Pridėti"
// suras pirmą DOM elementą su klase .btn-save-album
let addAlbumButton = document.querySelector(".btn-save-album");

// metodas .querySelectorAll() suranda visus elementus su klase .btn-save-album
// let addAlbumButton = document.querySelectorAll(".btn-save-album");

// Kai paspaudžiamas mygtukas, vykdyk addAlbum funkciją
addAlbumButton.addEventListener("click", addAlbum);


// Čia saugosim visus albumus
let albumList = [];

// Formos elementai
let artistElement = document.querySelector("#artist");
let albumElement = document.querySelector("#album");
let releaseDateElement = document.querySelector("#releaseDate");
let imageElement = document.querySelector("#image");


function addAlbum() {
    // nuskaitome laukelių reikšmes
    let artist = artistElement.value;
    let album = albumElement.value;
    let date = releaseDateElement.value;
    let image = imageElement.files[0];

    if (!artist || !album || !date || !image) {
        console.log("Neįvesti laukeliai");
        return;
    }

    let record = {
        "artist": artist,
        "album": album,
        "date": date,
        "image": image.name
    }

    // Patikrinime ar albumas jau buvo įvestas
    if (checkForDuplicates(record)){
        alert("Toks albumas jau išsaugotas");
        return;
    }

    // Saugome albumą
    albumList.push(record);
    console.log("Duomenys:", artist, album, date, image);    
}

function checkForDuplicates(record) {
    let isDuplicate = false;
    albumList.forEach(function(item){
        if (item.artist === record.artist && item.album === record.album && item.date === record.date) {
            isDuplicate = true;
        }
    })
    return isDuplicate;
};