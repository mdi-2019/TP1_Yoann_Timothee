const main = require('./main')
const mathjs = require('mathjs')

start = function () {
    console.log('\nMode choisi : normal\n')
    console.log("Entrez un calcul de la forme : 'op x [y]', entrez 'rep' pour calculer à partir du résultat précédent.")

    main.rl.on('line', (a) => {
        let answer = a.split(" ")
        let res
        if (answer[0] == 'sqrt'){
            try {
                res = mathjs.sqrt(answer[1] == 'rep' ? main.previousResult : answer [1])
                console.log(res)
                main.previousResult = res
            } catch (error) {
                console.log("Le format du calcul entré n'est pas correct ...\nLes opérations traitées sont 'pow' et 'sqrt'.\n")
            }
        } 
        else if (answer[0] == 'pow') {
            try {
                res = mathjs.pow(answer[1] == 'rep' ? main.previousResult : answer [1],
                                 answer[2] == 'rep' ? main.previousResult : answer [2])
                console.log(res)
                main.previousResult = res
            } catch (error) {
                console.log("Le format du calcul entré n'est pas correct ...\nLes opérations traitées sont 'pow' et 'sqrt'.\n")
            }
        }
        else {
            console.log("Le format du calcul entré n'est pas correct ...\nLes opérations traitées sont 'pow' et 'sqrt'.\n")
        }
    })
}

exports.start = start


