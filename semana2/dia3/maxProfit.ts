function maxProfit(prices: number[]): number {
    if (prices.length === 0) {
        return 0;
    }
    return 0;
}

let prices1: number[] = [7, 1, 5, 3, 6, 4];
let prices2: number[] = [7, 6, 4, 3, 1];

let minPrice: number = Infinity;
let maxP = 0;

for (let i = 0; i < prices2.length; i++) {
    if (prices2[i] < minPrice) {
        minPrice = prices1[i];
    } else {
        const p = prices2[i] - minPrice;
        if (p > maxP) {
            maxP = p;
        }
    }
}
console.log("Lucro máximo:", maxP);

console.log(`menor preco: ${minPrice} altas: ${maxP}`);
