
let mailingList= [];
let mailingList2= [];
let emailSubset = [];

for (let i = 0; i < json.length; i++) {
    let x = json[i];
       
    {
        mailingList.push(
            "Vardas:" + " " + x.first_name,
            "Pavarde:"+ " " + x.last_name,
            "Salis:"+ " " + x.country,
            "Email:" + " " + x.email );

        
        let person = {
            vardas: x.first_name,
            pavarde: x.last_name,
            salis: x.country,
            email: x.email
        }

        mailingList2.push(person);

       document.write(printGreeting(x.first_name, x.last_name, x.country)); 
    }
};

function printGreeting(first_name, last_name, country) {
    return ("Welcome "+first_name+" "+last_name+" "+ "from"+" "+ country+"!"+"</br>");
}



// v1
// emailSubset = json.filter(emailEndsWithCom);

// function emailEndsWithCom(person_object) {
//     let email = person_object.email;
//     return email.indexOf('.com') !== -1
// }

// v2
emailSubset = json.filter(function (person_object) {
    let email = person_object.email;
    return email.indexOf('.com') !== -1
});


// let a = 1;
// let b = 2;

// let a2 = 2;
// let b2 = 10;

// function aPlusB(skaiciusA, skaiciusB) {
//     let suma = skaiciusA + skaiciusB;
//     return suma;
// }

// // Kviečiu funkciją, su a ir b argumentais
// aPlusB(a, b); // 3
// aPlusB(a2, b2); // 12
// aPlusB(10, 50); // 60