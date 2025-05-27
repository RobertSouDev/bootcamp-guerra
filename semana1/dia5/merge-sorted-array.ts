function merge(nums1: number[], m: number, nums2: number[], n: number): void {}

const l1: number[] = [1, 2, 3, 0, 0, 0];
let m = 0;
const l2: number[] = [2, 5, 6];
let n = 0;

const l3: number[] = [0];
const l4: number[] = [1];

const newList1: number[] = [];

for (const i of l1) {
    if (i !== 0) {
        m = m + 1;
        newList1.push(i);
    }
    console.log(i);
}

for (const i of l2) {
    if (i !== 0) {
        n = n + 1;
        newList1.push(i);
    }
    console.log(i);
}
console.log("-----------------");
console.log(m);
console.log(n);

console.log(newList1.sort((a, b) => a - b));
/*

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1; // Último elemento válido de nums1
    let j = n - 1; // Último elemento de nums2
    let k = m + n - 1; // Última posição de nums1
z
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};
*/
