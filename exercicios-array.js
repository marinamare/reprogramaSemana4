// Exercícios práticos com for e arrays!

// 1) Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
// Exemplo: recebendo ["banana", "gatinho", "brócolis"] deve imprimir no console:
// índice 0, elemento "banana"
// índice 1, elemento "gatinho"
// índice 2, elemento "brócolis"

const arrei = ["banana", "gatinho", "brocolis"]

function imprimeIndiceEElemento (arr) {

for (let i = 0; i < arr.length; i++) {
  console.log(`índice: ${i}, elemento: ${arr[i]}`)
}
}

imprimeIndiceEElemento(arrei)

//índice: 0, elemento: banana  
//índice: 1, elemento: gatinho 
//índice: 2, elemento: brocolis



// 2) Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
// Exemplo: recebendo [10,11,12] deve retornar 33

function imprimeSoma () {
  const arrayNumeros = [10, 11, 12]
  let somaArray = 0
  
    for (let i = 0; i < arrayNumeros.length; i++){
      somaArray += arrayNumeros[i]
    }
    console.log (somaArray)
  }
  
  imprimeSoma()

  //33

// 3) Crie uma função que receba uma array de números inteiros e retorne outra array somente 
//com os elementos maiores que 5.
// Exemplo, recebendo [88,55,0,2,85,81,24,12] deve retornar [ 88, 55, 85, 81, 24, 12 ]

const numeros = [88,55,0,2,85,81,24,12]

function filtroMaiorQueCinco(arr) {
const maioresQueCinco = numeros.filter(numero => numero > 5)
console.log (maioresQueCinco)
}

filtroMaiorQueCinco(numeros)

// [ 88, 55, 85, 81, 24, 12 ]

// 4) Modifique a função anterior para que receba, além da array, o número para comparação (não deixar mais fixo como número 5).
// Exemplo, recebendo ([88,55,0,2,85,81,24,12], 20) deve retornar [ 88, 55, 85, 81, 24 ]

const numeros = [88,55,0,2,85,81,24,12]

function retiraMenorQue(arr, num) {
    const filtroMenorQue = numeros.filter(numero => numero > num)
    console.log(filtroMenorQue)
}

retiraMenorQue(numeros, 20)

// [ 88, 55, 85, 81, 24 ]

// 5) Crie uma função que receba uma array de números inteiros e retorne o maior número encontrado.
// Exemplo: recebendo [56, 12, 168, 66] deve retornar 168
// EXTRA: Pesquisar uma maneira iniciar com o menor número possível (dica: não é zero)

var array = [56, 12, 168, 66]

function numeroMaior (arr) {

    var maiorNumero = Math.max.apply(null, arr);

    console.log(maiorNumero)
}

numeroMaior(array)

/* 6) Crie uma função que receba uma array de números inteiros e retorne o menor valor e o 
maior valor da array, no seguinte formato: "o menor número é X e o maior número é Y".
 Exemplo, recebendo [5, 37, 18, 59, 12, -5] a função deve retornar "o maior número é 59 
 e o menor número é -5" */ 
 
 var array = [5, 37, 18, 59, 12, -5]

 function menorMaior (arr){
    var maiorNumero = Math.max.apply(null, arr);
    

    var menorNumero = Math.min.apply(null, arr);
    

    console.log (`o maior numero e ${maiorNumero} e o menor numero e ${menorNumero}`)
 }

 menorMaior(array)