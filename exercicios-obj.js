// 1) Crie uma função que receba 3 parâmetros: o nome de um livro, 
// a quantidade de páginas e a autoria. Retorne um objeto no formato: 
// {titulo: "nome do livro", paginas: "número de páginas", autoria: "nome da pessoa"}

// Exemplo: 
// objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles') 

// retorna o objeto:
// {
//   titulo: 'Antes do Baile Verde', 
//   paginas: 234,
//   autoria: 'Lygia Fagundes Telles'
// }

function objLivro (nomeLivro, paginasLivro, autoriaLivro) {
    return  ({
        titulo: nomeLivro,
        pagina: paginasLivro,
        autoria: autoriaLivro
    })
    
}

console.log(objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Teles'))

// 2) Aproveite a função acima em outra função, que deve retornar a seguinte frase: 
// "O livro XXXX foi escrito por XXX e tem XXX páginas". 
// Você deve utilizar a função que já está pronta, e não reescrever 
// a lógica dela dentro dessa nova função.

function objLivro (nomeLivro, paginasLivro, autoriaLivro) {
    const objeto = {
        titulo: nomeLivro,
        pagina: paginasLivro,
        autoria: autoriaLivro
    }

    return (
        `O livro ${objeto.titulo} foi escrito por ${objeto.autoria} e tem ${objeto.pagina} páginas`
    )
    
}

console.log(objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Teles'))

// 2) Crie uma função que receba um objeto como o abaixo:

// const pessoa = {
//   nome: 'Nazaré',
//   sobrenome: 'Tedesco',
// }

// Dado um objeto que tem uma propriedade 'nome' e uma propriedade 'sobrenome',
// a função deve retornar um novo objeto com as mesmas propriedades que o objeto 
//recebido e mais uma propriedade, chamada 'nomeCompleto', cujo valor é uma string
// com o nome e sobrenome separados por um espaço.

// Exemplo de retorno:
// {
//   nome: 'Nazaré',
//   sobrenome: 'Tedesco',
//   nomeCompleto: 'Nazaré Tedesco'
// }

function nomeCompleto (nome, sobrenome) {
    const objNomeCompleto = {
        nome: nome,
        sobrenome: sobrenome,
        nomeCompleto: `${nome} ${sobrenome}`
    }
    return objNomeCompleto
}

console.log(nomeCompleto('marina','mare'))

// 3) Crie uma função que receba o objeto abaixo e o nome de uma das chaves, 
//e retorne o produto de todos os elementos do array que for selecionado através da chave.
// Exemplo:
// somaArray(objetoArrays, 'array2') // 21



