// ✅ 1. Declara uma variável com tipo string
const nome1: string = "Roger"

// ✅ 2. Declara uma função que soma 2 números e retorna o resultado

function soma(a: number, b:number): number {
    return a + b
}
const numero: number = 1
const numero2: number  = 4

// ✅ 3. Cria um array de números e imprime a média deles
const notas: number[] = [10, 8, 10,9];

function media(arr: number[]): number {
    const total = arr. reduce((acc, arr)=> acc+ arr, 0)
    return total / arr.length
}
console.log(media(notas))
// ✅ 4. Cria um tipo "Cliente" com nome (string) e idade (number)

type Cliente = {
    nome: string;
    idade: number;
}

const cliente1: Cliente = {
    nome: "Miguel",
    idade: 4
}

// ✅ 5. Cria uma função que recebe um Cliente e retorna uma string "Nome: João, Idade: 30"
function welcome(user: Cliente): string {
    return `Bem vindo, ${user.nome}, sua idade é ${user.idade}`
}

console.log(welcome(cliente1))