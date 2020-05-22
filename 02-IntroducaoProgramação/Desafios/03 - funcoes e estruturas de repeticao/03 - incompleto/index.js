const usuarios = [
    {
        nome: 'Gomes',
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: 'Ulisses',
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: 'Julia',
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
]

function calculaSaldo(receitas, despesas) {
    for (i = 0; i < usuario.lenght; i++) {
        somanumero(usuario[i])
    }
}


function somanumero(usuario) {
    let sumReceita = 0
    let sumDespesas = 0

    for (i = 0; i < usuario.receitas.lenght; i++) {
        sumReceita = sumReceita + usuario.receitas[i]
    }

    for (i = 0; i < usuario.despesas.lenght; i++) {
        sumDespesas = sumDespesas + usuario.despesas[i]
    }

    const somaFinal = sumReceita + sumDespesas
    return somaFinal
}

