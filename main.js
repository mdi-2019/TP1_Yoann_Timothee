const normal = require('./normal')
const scientifique = require('./scientifique')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const previousResult = 0

function modeChoice(answer) {
    if (answer != 1 && answer != 2) console.log("'" + answer + "' n'est pas une réponse valide, tapez '1' ou '2'")
    else {
        if (answer == 1) normal.start()
        else mode = scientifique.start()
        rl.removeListener('line', modeChoice)
    }
}

let main = function () {
    console.log('\n**** Bienvenue dans ce super calculateur ! ****')
    console.log("Pour quitter à n'importe quel moment, entrez 'quitter'.")
    console.log('Choisissez un mode de calcul :\n  1 -> normal\n  2 -> scientifique\n')
    rl.on('line', modeChoice)
}

rl.on('line', (answer) => {
    if (answer === 'quitter') process.exit()
})
main()

exports.main = main
exports.rl = rl
exports.previousResult = previousResult







