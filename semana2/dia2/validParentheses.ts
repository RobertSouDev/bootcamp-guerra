function isValid(s: string): boolean {
    const stack: string[] = [];
    const pairs: { [key: string]: string } = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    for (const char of s) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
            console.log(stack);
        } else if (char === ")" || char === "}" || char === "]") {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

//console.log(isValid("({]})"));

const string = ["(", "{", "[", "]", "}", ")"];
console.log(string.pop() === ")");
console.log(string);
