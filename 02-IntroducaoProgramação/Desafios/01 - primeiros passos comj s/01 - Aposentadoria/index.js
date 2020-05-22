cliente01 = {
    nome: 'Zé',
    sexo: 'M',
    idade: 72,
    contribuicao: 30
},

cliente02 = {
    nome: 'Maria',
    sexo: 'F',
    idade: 64,
    contribuicao: 20
}

function calculaAposentadoria(pessoa) {
    pessoa.aposentado = false

    const calc = pessoa.idade + pessoa.contribuicao

    if (pessoa.sexo == 'F' && calc >= 85) {
        pessoa.aposentado = true
    }
    else if (pessoa.sexo == 'M' && calc >= 95) {
        pessoa.aposentado = true
    }
    else {
        pessoa.aposentado = false
    }
}

calculaAposentadoria(cliente01)
calculaAposentadoria(cliente02)

function mensagemAposentadoria(pessoa) {
    if (pessoa.aposentado) {
        console.log(`${pessoa.nome} você pode se aposentar`)
    }
    else {
        console.log(`${pessoa.nome} você não pode se aposentar`)
    }
}

mensagemAposentadoria(cliente01)
mensagemAposentadoria(cliente02)