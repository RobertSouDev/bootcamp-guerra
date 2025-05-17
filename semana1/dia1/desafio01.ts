// Dado um número inteiro n, retorne true se ele for um número primo, senão false.
// Ex: isPrime(7) => true | isPrime(10) => false

//function isPrime(n: number): boolean {
// Sua lógica aqui
//}

function isPrime(numero: number): boolean {
    if(numero < 2){
        return true
    }
    if( numero  % 2 === 0) {
        if( numero % 3 === 0){
            return false
        }
    }
    return true
}

console.log(isPrime(11))