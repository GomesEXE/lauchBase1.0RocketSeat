const usuario = [
    {
        nome: 'Matheus',
        tecnologias: ['html', 'JavaScript', 'CSS']
    },
    {
        nome: 'Daniel',
        tecnologias: ['Java', 'HTML', 'Ionic', 'Phyton', 'CSS']
    },
    {
        nome: 'Ribamar',
        tecnologias: ['Processing', 'Java', 'Phyton', 'Godot']
    }
]

function percorreLista(usuario) {
    for (let i = 0; i < usuario.length; i++) {
        console.log(`O ${usuario[i].nome}, trabalha com ${usuario[i].tecnologias}`)
    }

}

percorreLista(usuario)
console.log('---------------- pt02 ----------------')

function verificaJobCss(usuario) {

    for (let i = 0; i < usuario.tecnologias.length; i++) {
        if (usuario.tecnologias[i] == 'CSS') {
            return true
        }
    }
}


function mensagemCss(usuario) {

    for (let i = 0; i < usuario.length; i++) {
        const usuarioTrabalhaComCss = verificaJobCss(usuario[i])

        if (usuarioTrabalhaComCss) {
            console.log(`O ${usuario[i].nome} trabalha com CSS`)
        }
    }
}

mensagemCss(usuario)