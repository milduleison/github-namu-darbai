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


// Gauname albumus iš localStorage ir sukuriame objektą
let albumsJSON = localStorage.getItem("albums");
let albumList = JSON.parse(albumsJSON);

if (albumList === null) {
    albumList = [];
}


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
        alert("Neįvesti visi laukeliai");
        return;
    }

    if (!isAlbumYear(date)) {
        alert("Albumo metai įvesti neteisingai");
        return;
    };

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

    // Išsaugoti duomenis į localStorage
    let albumsJSON = JSON.stringify(albumList);
    localStorage.setItem("albums", albumsJSON);

    // Atnaujinkim albumų sąrašą
    renderAlbums();
    
    // Išvalykim formą
    clearForm();
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

function isAlbumYear(year) {
    let date = new Date();
    let currentYear = date.getFullYear();

    if (isFinite(year) && year <= currentYear && year > 1900) {
        return true
    } else {
        return false;
    }
}

let formElement = document.querySelector(".album-form");
let clearButton = document.querySelector(".btn-clear-form");

clearButton.addEventListener("click", clearForm);

function clearForm() {
    formElement.reset();

    // arba
    // artistElement.value = "";
    // albumElement.value = "";
    // releaseDateElement.value = "";
    // imageElement.value = "";
}


function renderAlbums() {
    // Patikrinti ar yra išsaugotų albumų
    // Jei nėra - nutraukti funkcijos vykdymą
    if (!albumList) return;

    // Jei yra, kuriame ciklą ir į rezultatą susidedam visų albumų HTML
    let result = "";
    for (let album of albumList) {
        result += `
            <div class="link-container">
                    <a class="link" href="https://www.youtube.com/results?search_query=${album.artist}+${album.album}" target="_blank">Klausytis<i class="fa fa-music" aria-hidden="true"></i></a>
            </div>
            <div class="album clearfix">
                <img src="img/${album.image}" alt="${album.artist} - ${album.album}">
                <h2>${album.artist} - <span>${album.album}</span></h2>
                <date>${album.date}</date>
            </div>
            <hr>
        `;
    }
    
    // Spausdinam rezultatą į ".album-list"
    let albumListElement = document.querySelector(".album-list");
    albumListElement.innerHTML = result;
}

renderAlbums();

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}