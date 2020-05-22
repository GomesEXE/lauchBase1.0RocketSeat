const programador = {
    nome: 'Gomes',
    idade: 22,
    tecnologias: [
        {
            nome: 'c', 
            especialidade: 'desktop'
        },
        {
            nome: 'java',
            especialidade: 'Web/mobile'
        },
        {
            nome: 'Phyton',
            especialidade: 'Games engine - godot'
        }
    ]
}

console.log(`O usuario ${programador.nome} tem ${programador.idade} 
e uma das linguagens que ele sabe é ${programador.tecnologias[2].nome} 
com especialidade em ${programador.tecnologias[2].especialidade}`)