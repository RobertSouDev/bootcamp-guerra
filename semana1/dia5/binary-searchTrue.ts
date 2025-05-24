function searchTrue(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

const nums11: number[] = [-1, 0, 3, 5, 9, 12, 2];
const target11: number = 9;

const nums22: number[] = [-1, 0, 3, 5, 9, 12];
const target22: number = 2;

console.log(searchTrue(nums11, target11));

/*
Reforço mental rápido
left e right delimitam a busca
mid sempre calcula o ponto central
A cada passo, o espaço de busca é dividido pela metade
Eficiente pra arrays ordenados, como o desafio exige

*/
