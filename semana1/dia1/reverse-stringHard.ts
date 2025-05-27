function isPalindrome22(x: number): boolean {
    let inverted: number = 0;
    const y = x;
    while (x > 0) {
        let last = x % 10;
        console.log(`valor de last: ${last}`);
        inverted = inverted * 10 + last;
        console.log(`valor de inverted: ${inverted}`);

        x = ~~(x / 10);
        console.log(`valor de x: ${x}`);
    }

    return y === inverted;
}

console.log(isPalindrome22(123));
