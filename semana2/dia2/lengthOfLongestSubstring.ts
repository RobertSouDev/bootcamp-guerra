function lengthOfLongestSubstring(s: string): number {
    let list: string = " ";
    let count: number = 0;
    let maximo: number = 0;
    for (const i of s) {
        if (i !== list) {
            console.log(`valor do count: ${count} valor do maximo ${maximo}`);
            count = count + 1;
            maximo = count > maximo ? (maximo = count) : (maximo = maximo);
            console.log(`valor do maximo ${maximo}`);
        } else {
            count = 0;
        }
        console.log(list);
        list = i;
    }
    if (count === 0) {
        count = 1;
    }

    return maximo;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
