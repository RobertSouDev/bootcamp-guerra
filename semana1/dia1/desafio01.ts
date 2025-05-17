// Dado um número inteiro n, retorne true se ele for um número primo, senão false.
// Ex: isPrime(7) => true | isPrime(10) => false

//function isPrime(n: number): boolean {
// Sua lógica aqui
//}

function isPrime(numero: number): boolean {
    if(numero < 2) return false
     for(let i = 2 ; i< numero ;i++){
        if (numero % i === 0) return false
     }

     return true
}
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(9))
console.log(isPrime(6))
console.log(isPrime(11))


// ou melhor ainda ficaria assim
function isPrime2(numero: number): boolean {
    if (numero < 2) return false;
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) return false;
    }
  
    return true;
  }
  



