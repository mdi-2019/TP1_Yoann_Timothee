const normal = require('./normal');
const scientifique = require('./scientifique');

console.log('\n**** Bienvenue dans ce super calculateur ! ****');
let mode = "";

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var question = function(q) {
    return new Promise( (res, rej) => {
        rl.question( q, answer => {
            res(answer);
        })
    });
};

(async function main() {
    var answer;
    while (answer != 1 && answer != 2) {
        answer = await question("Choisissez un mode de calcul :\n  1 -> normal\n  2 -> scientifique\n");
        if (answer != 1 && answer != 2) console.log("'" + answer + "' n'est pas une réponse valide, tapez '1' ou '2'");
    }
    if (answer == 1) mode = "normal";
    else mode = "scientifique";
    rl.close();
    if (mode === "normal") normal.start();
    else scientifique.start();
})();

