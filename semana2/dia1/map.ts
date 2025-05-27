/*
Desafio: Transformar Array de Números em Strings Formatadas
[10.5, 20.3, 15.0, 8.75];
Saída Esperada:
["R$ 10,50", "R$ 20,30", "R$ 15,00", "R$ 8,75"]
*/

const prices: number[] = [10.5, 20.3, 15.0333333333333, 8.7222222225];

const formattedPrice = prices.map((price) => {
    const formatted = price.toFixed(2).replace(".", ",");
    return `R$ ${formatted}`;
});

console.log(formattedPrice);
