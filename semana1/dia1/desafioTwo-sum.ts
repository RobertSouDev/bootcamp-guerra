function twoSum(nums: number[], target: number): number[] {
    const result: number[] = []
    fim:
    for(let i =0 ; i< nums.length; i++) {
        for(let x = 0; x < nums.length; x++){
           if(i !== x && nums[i]+ nums[x] === target) {
            result.push(i, x)
            break  fim
           }
        }
    }

    return result
};

const list1: number[] = [2,7,11,15]
const target: number = 9

console.log(twoSum(list1, target))