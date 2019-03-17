const main = require('./main')
const mathjs = require('mathjs')


normalCalc = function (a) {
    let answer = a.split(" ")
    let res
    switch (answer[0]) {
        case 'menu' :
            main.rl.removeListener('line', normalCalc)
            main.main()
            break;
        case 'sqrt':
            try {
                res = mathjs.sqrt(answer[1] == 'rep' ? main.previousResult : answer [1])
                console.log(res)
                main.previousResult = res
            } catch (error) {
                console.log("Le format du calcul entré n'est pas correct ...\nLes opérations traitées sont 'pow' et 'sqrt'.\n")
            }
            break
        
        case 'pow':
            try {
                res = mathjs.pow(answer[1] == 'rep' ? main.previousResult : answer [1],
                                answer[2] == 'rep' ? main.previousResult : answer [2])
                console.log(res)
                main.previousResult = res
            } catch (error) {
                console.log("Le format du calcul entré n'est pas correct ...\nLes opérations traitées sont 'pow' et 'sqrt'.\n")
            }
            break
        default:
            console.log("Le format du calcul entré n'est pas correct ...\nLes opérations traitées sont 'pow' et 'sqrt'.\n")
            break
    }
}

let start = function () {
    console.log('\nMode choisi : normal\n')
    console.log("Entrez un calcul de la forme : 'op x [y]', entrez 'rep' pour calculer à partir du résultat précédent." 
    + "\nPour revenir au menu principal, entrez 'menu'.")

    main.rl.on('line', normalCalc)
}

exports.start = start


