/*Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/

function search(nums: number[], target: number): number {
    let res: number = -1;
    let count: number = 0;

    fim: for (const i of nums) {
        count = count + 1;
        if (target === i) {
            res = count - 1;
            break fim;
        }
    }

    return res;
}

const nums: number[] = [-1, 0, 3, 5, 9, 12, 2];
const target: number = 9;

const nums2: number[] = [-1, 0, 3, 5, 9, 12];
const target2: number = 2;

console.log(search(nums, target));
