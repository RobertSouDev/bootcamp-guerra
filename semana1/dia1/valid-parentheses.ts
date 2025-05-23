function isValid(s: string): boolean {
    const stack: string[] = []
    const pairs: {[key: string]: string} = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for(const c of s){
        if(c === '(' || c === '{' || c === '[') {
            stack.push(c)
        }else if(c === ')' || c === '}' || c === ']'){
            if(stack.pop() !== pairs[c])
            return false
        }

    }

    return stack.length === 0;
}