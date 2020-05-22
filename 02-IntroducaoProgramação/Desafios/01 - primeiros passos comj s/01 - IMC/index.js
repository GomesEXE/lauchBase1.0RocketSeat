const pessoa01 = {
    nome: 'Matheus',
    peso: 71,
    altura: 1.70
}

const pessoa02 = {
    nome: 'Ana Celia',
    peso: 93,
    altura: 1.68
}

function calculaImc(pessoa) {
    const imc = pessoa.peso / (pessoa.altura * pessoa.altura)
    return imc
}

const imc01 = calculaImc(pessoa01)
const imc02 = calculaImc(pessoa02)

function mensagemImc(imc, pessoa){
    if( imc < 29.9){
        console.log(`IMC: ${imc}: ${pessoa.nome} você não está acima do peso`)
    }
    else{
        console.log(`IMC: ${imc}: ${pessoa.nome} você está acima do peso `)
    }
}

mensagemImc(imc01, pessoa01)
mensagemImc(imc02, pessoa02)
