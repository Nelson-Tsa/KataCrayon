
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

drawMyPen('septembre');
drawMyPen('fevrier');
drawMyPen('mars');
drawMyPen('juin');
drawMyPen('decembre');
drawMyPen('octobre');
