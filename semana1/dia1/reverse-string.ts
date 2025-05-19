function isPalindrome(x: number): boolean {
    const inverted: number = Number(String(x).split('').reverse().join(''))

    if(x !== inverted){
        return false
    }
    return true
};

console.log(isPalindrome(212))