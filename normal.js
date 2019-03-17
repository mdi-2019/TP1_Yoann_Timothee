const mathjs = require('mathjs');

start = function (rl) {
    console.log('\nMode choisi : normal\n');
    console.log("Entrez un calcul de la forme : 'op x [y]', avec op égal à 'pow' ou 'sqrt'");

    rl.on('line', (a) => {
        let answer = a.split(" ");
        let res;
        if (answer[0] == 'sqrt'){
            try {
                res = mathjs.sqrt(answer[1]);
                console.log(res);
            } catch (error) {
                console.log("Le format du calcul entré n'est pas correct ...\n")
            }
        } 
        else if (answer[0] == 'pow') {
            try {
                res = mathjs.pow(answer[1], answer[2]);
                console.log(res);
            } catch (error) {
                console.log("Le format du calcul entré n'est pas correct ...\n")
            }
        }
        else {
            console.log("Le format du calcul entré n'est pas correct ...\n")
        }
    });
}

exports.start = start;


