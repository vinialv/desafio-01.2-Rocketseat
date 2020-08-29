/*
Desafio 01.2 da rocketseat do bootcamp LaunchBase

OBJETOS
*/

const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereço: {
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
}

console.log(`A empresa Rocketseat está localizada em ${empresa.endereço.rua}, ${empresa.endereço.numero}`);

//VETORES

const programador = {
    nome: "Vinicius",
    idade: 22,
    tecnologias: [
        {
            nome: "Java",
            especialidade: "Desktop"
        },
        {
            nome: "JavaScript",
            especialidade: "Web"
        },
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} especializado em ${programador.tecnologias[0].especialidade} e também está aprendendo ${programador.tecnologias[1].nome} especializando em ${programador.tecnologias[1].especialidade}.`)