function calculoImcSrJoaquin(peso, altura) {
    if(peso <= 0) {
        return console.log('Digite um peso maior q 0')
    }

    const _peso = peso

    if(altura <= 0) {
        return console.log('Digite uma altura maior que 0')
    }

    const _altura = altura

    const imc = _peso/(_altura * _altura)

    if(imc < 18.5) {
        return console.log('IMC: ', imc, ' - Abaixo do peso')
    }

    if(imc >= 18.5 && imc <= 24.9) {
        return console.log('IMC: ', imc, ' - Peso ideal')
    }

    if(imc >= 25 && imc <= 29.9) {
        return console.log('IMC: ', imc, ' - Acima do peso')
    }

    if(imc >= 30 && imc <= 34.9) {
        return console.log('IMC: ', imc, ' - Obesidade grau 1')
    }

    if(imc >= 35 && imc <= 39.9) {
        return console.log('IMC: ', imc, ' - Obesidade grau 2')
    }

    if(imc > 40) {
        return console.log('IMC: ', imc, ' - Obesidade grau 3')
    }

    return console.log(imc)
}

calculoImcSrJoaquin(110, 1.80)


//IMC CLIENTE = 23
//caderno
//IMC menor que 18.5 - Abaixo do peso
//IMC entre 18.5  e 24.9 - Peso ideal
//IMC entre 25 e 29.9 - Pré-obesidade
//IMC entre 30 e 34.9 - Obesidade grau 1
//IMC entre 35 e 39.9 - Obesidade grau 2
//IMC acima de 40 - Obesidade grau 3
