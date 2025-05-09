
const calendrierDuCrayon = {
    septembre: 10,
    octobre: 9,
    novembre: 8,
    decembre: 7,
    janvier: 6,
    fevrier: 5,
    mars: 4,
    avril: 3,
    mai: 2,
    juin: 1,
};


let calendrierDuCrayonInverse = ["Juin", "Mai", "Avril", "Mars", "Fevrier", "Janvier", "Decembre", "Novembre", "Octobre", "Septembre"];
function drawMyPen(mois){
   
    const etages = calendrierDuCrayon[mois];
    const corps = etages
    let crayon = '';

    // Dessin de la mine
    crayon += ' /\\\n';
    crayon += '/__\\\n';

    // Dessin du corps
    for (let i = 0; i < corps; i++) {
        crayon += '||||\n';
    }
if (corps > 4) {
        crayon += '|__|\n';
    
    // Dessin de la gomme
        crayon += '|__|\n';
    

    // Dessin de la base
    crayon += '|  |\n';
    crayon += '|__|\n';
}else {
    crayon += '|__|\n';
    crayon += '|__|\n';
}
    console.log(crayon);
    
}

// drawMyPen('septembre');
// drawMyPen('fevrier');
// drawMyPen('mars');
// drawMyPen('juin');
// drawMyPen('decembre');
// drawMyPen('octobre');


function afficherCrayon(mois){
       
    const corps = mois;
    let crayon = '';

    // Dessin de la mine
    crayon += '    /\\\n';
    crayon += '   /__\\\n';

    // Dessin du corps
    for (let i = 0; i < corps; i++) {
        crayon += '   ||||\n';
    }
if (corps > 4) {
        crayon += '   |__|\n';
    
    // Dessin de la gomme
        crayon += '   |__|\n';
    

    // Dessin de la base
    crayon += '   |  |\n';
    crayon += '   |__|\n';
}else {
    crayon += '   |__|\n';
    crayon += '   |__|\n';
}
let decompte = corps
    
    if (decompte > 0) {
        dessinerTailleCrayon();
        console.log(crayon);
        decompte--;
        afficherCrayon(decompte);
    }else {
        return ;
    }
}

function drawMyPen1(mois){
   
    const etages = calendrierDuCrayon[mois];
    const corps = etages
 afficherCrayon(corps);
    
}

 drawMyPen1('septembre');



function dessinerTailleCrayon(){

   let tailleCrayon ="";
   tailleCrayon += " ________\n";
   tailleCrayon += "|________|\n";
    tailleCrayon += "|  * *   |\n"
    tailleCrayon += "\\________/\n"
    tailleCrayon += " \\  /\\  /\n"
    tailleCrayon += "  -/  \\-"
    
    console.log(tailleCrayon);
}

// ------------------------------  TESTING ------------------------------


const Zone = document.getElementById('zoneCrayon')
const boutonValider = document.getElementById('valider');
let stopConfetti ;


boutonValider.addEventListener('click', function() {
    Zone.innerHTML = "";
    clearInterval(stopConfetti);
    const mois = document.getElementById('mois').value;
    
    drawMyPenHTML(mois);
});

function afficherCrayonHTML(mois){

       let moisEnCours = calendrierDuCrayonInverse[mois-1];
       const moisActuel = document.createElement('p');
       moisActuel.innerHTML = "Mois en cours : " + moisEnCours;
       
    const corps = mois;
    let crayon = '';

    // Dessin de la mine
    crayon += ' /\\\n';
    crayon += ' /__\\\n';

    // Dessin du corps
    for (let i = 0; i < corps; i++) {
        crayon += ' ||||\n';
    }
if (corps > 4) {
        crayon += ' |__|\n';
    
    // Dessin de la gomme
        crayon += ' |__|\n';
    

    // Dessin de la base
    crayon += ' |  |\n';
    crayon += ' |__|\n';
}else {
    crayon += ' |__|\n';
    crayon += ' |__|\n';
}
let decompte = corps
    setTimeout(() => {  
        if (decompte > 0) {
            Zone.innerHTML = "";
    const dessinCrayon = document.createElement('pre');
    // dessinCrayon.style.lineHeight = '0.10';

   
            dessinerTailleCrayonHTML();
            console.log(crayon);
            decompte--;
            afficherCrayonHTML(decompte);
            dessinCrayon.innerHTML = crayon;
            
            Zone.appendChild(dessinCrayon);
            Zone.appendChild(moisActuel);
        }else {
            messageFinHTML();

            return ;
        }
    }, 2000);
}

function drawMyPenHTML(mois){
   
    const etages = calendrierDuCrayon[mois];
    const corps = etages
 afficherCrayonHTML(corps);
    
}


function dessinerTailleCrayonHTML(){
    // Zone.innerHTML = "";
    const dessinTailleCrayon = document.createElement('pre');
    dessinTailleCrayon.style.lineHeight = '0.8';
   
   let tailleCrayon ="";
   tailleCrayon += "________\n<br>"
   tailleCrayon += "|________|\n<br>"
    tailleCrayon += "|  *  *  |\n<br>"
    tailleCrayon += "\\________/\n<br>"
    tailleCrayon += " \\  /\\  /\n<br>"
    tailleCrayon += " -/  \\-<br>"
    dessinTailleCrayon.innerHTML = tailleCrayon;
    Zone.appendChild(dessinTailleCrayon);
    console.log(tailleCrayon);
}


function messageFinHTML(){
    launchConfetti();
    Zone.innerHTML = "";
    const messageFin = document.createElement('p');
    messageFin.innerHTML = "Bonne vacances !! ";
    Zone.appendChild(messageFin);
    console.log("Bonne vacances !!");
    
    stopConfetti = setInterval(launchConfetti, 1000)
}



function launchConfetti() {
    const canvas = document.querySelector('#confetti-canvas')
    let myConfetti = confetti.create(canvas, { resize: true, useWorker: true });
    myConfetti({
      particleCount: 100,
      spread: 160
    });
  }
 