const normal = require('./normal');
const scientifique = require('./scientifique');
const readline = require('readline');

console.log('\n**** Bienvenue dans ce super calculateur ! ****');
console.log('Choisissez un mode de calcul :\n  1 -> normal\n  2 -> scientifique\n');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function modeChoice(answer) {
    if (answer != 1 && answer != 2) console.log("'" + answer + "' n'est pas une réponse valide, tapez '1' ou '2'");
    else {
        if (answer == 1) normal.start(rl);
        else mode = scientifique.start(rl);
        rl.removeListener('line', modeChoice);
    }
}

rl.on('line', modeChoice);







