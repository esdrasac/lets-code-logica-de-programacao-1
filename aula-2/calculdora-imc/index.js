/**
 * JavaScript
 * É uma linguagem de programação INTERPRETADA
 * Scripts de alto nível
 * Tipagem fraca
 *  
 *
 * 
 * Links:
 *  https://www.freecodecamp.org/portuguese/news/linguagens-de-programacao-interpretadas-x-compiladas-qual-e-a-diferenca/#:~:text=Em%20uma%20linguagem%20compilada%2C%20a,l%C3%AA%20e%20executa%20o%20c%C3%B3digo.
 *  https://www.alura.com.br/artigos/o-que-sao-as-tipagens-estatica-e-dinamica-em-programacao
 *  
 */

 function calculoImcSrJoaquin() {
    const peso = document.form.peso.value
    const altura = document.form.alt.value
    
    if(peso <= 0) {
        return document.form.comment.value = 'Digite um peso maior q 0'
    }


    if(altura <= 0) {
        return document.form.comment.value = 'Digite uma altura maior que 0'
    }

    const imc = peso/(altura * altura).toFixed(2)
    
    document.form.massacor.value = imc

    if(imc < 18.5) {
        return document.form.comment.value = 'Abaixo do peso'
    }

    if(imc >= 18.5 && imc <= 24.9) {
       return document.form.comment.value = 'Peso ideal'
    }

    if(imc >= 25 && imc <= 29.9) {
        return document.form.comment.value = 'Acima do peso'
    }

    if(imc >= 30 && imc <= 34.9) {
        return document.form.comment.value = 'Obesidade grau 1'
    }

    if(imc >= 35 && imc <= 39.9) {
        return document.form.comment.value = 'Obesidade grau 2'
    }

    if(imc > 40) {
        return document.form.comment.value = 'Obesidade grau 3'
    }

}